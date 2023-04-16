import { CommonTokenStream, ParserRuleContext, TerminalNode, ErrorNode, Interval, CharStream, ErrorStrategy } from 'antlr4';
import DramaLexer from './antlr/DRAMA_Lexer';
import DramaParser, { InstrContext, LineContext, No_argContext, Single_argContext, VarContext, StartContext, LabelContext, Double_argContext } from './antlr/drama';
import DramaVisitor from './antlr/dramaVisitor';
import CodeStats from './CodeStats';

import modifyParseTree from './ParseTreeModifier';
import * as vscode from 'vscode';
import { INSTR_SPACING } from './Constants';
import LineErrorStrategy from './CustomErrorStrategy';




class FormatCodeVisitor extends DramaVisitor<string> {
    tokenStream: CommonTokenStream;
    currentLinePos = 0;
    codeStats: CodeStats;
    alignConfig: Alignment;

    constructor(parseTree: StartContext, tokenStream: CommonTokenStream, config: vscode.WorkspaceConfiguration) {
        super();
        modifyParseTree(tokenStream, config)
        this.alignConfig = config.get("alignment") || { label: AlignOptions.Left, comment: CommentOptions.Instruction };
        this.tokenStream = tokenStream;
        this.codeStats = new CodeStats(parseTree);
    }

    visitChildren: (ctx: ParserRuleContext) => string = (ctx) => {
        let code = '';

        for (let i = 0; i < ctx.getChildCount(); i++) {
            code += this.visit(ctx.getChild(i));
        }

        return code;
    }

    visitTerminal: (ctx: TerminalNode & ParserRuleContext) => string = (ctx) => {
        if (ctx.symbol.type === DramaParser.EOF) {
            return "";
        }

        return this.myGetText(ctx)
    }

    visitErrorNode(node: ErrorNode): string {
        return node.getText()
    }

    visitLabel: (ctx: LabelContext) => string = (ctx) => {
        const id = ctx.ID().symbol.text + ": ";

        if (this.alignConfig.label === AlignOptions.Center) {
            return id.padStart((id.length + this.codeStats.labelLength) / 2).padEnd(this.codeStats.labelLength)
        } else if (this.alignConfig.label === AlignOptions.Right) {
            return id.padStart(this.codeStats.labelLength);
        } else {
            return id.padEnd(this.codeStats.labelLength);
        }
    }
    visitLine: (ctx: LineContext) => string = (ctx) => {
        let newLine = "";
        if (ctx.label()) {
            newLine += this.visit(ctx.label())
        } else if (ctx.instr()) {
            newLine = " ".repeat(this.codeStats.labelLength)
        }

        if (ctx.instr()) {
            newLine += this.visit(ctx.instr())

        }
        this.currentLinePos = newLine.length;
        newLine += this.visit(ctx.EOL())

        return newLine
    }

    visitDouble_arg: (ctx: Double_argContext) => string = ctx => {
        let instrLen = 0;
        const instrC = ctx.parentCtx?.parentCtx as InstrContext;

        if (instrC !== undefined) {
            instrLen = instrC.INSTR_MODE().symbol.text.length
        }

        let line = " ".repeat(INSTR_SPACING - instrLen) // distance between opcode and first arg

        // should always be like 3: arg1 "," arg2
        const firstArg = this.visit(ctx.getChild(0)) + ",";
        line += firstArg.padEnd(this.codeStats.firstArgLength + 2)
        line += this.visit(ctx.getChild(2));

        return line
    }

    visitSingle_arg: (ctx: Single_argContext) => string = (ctx) => {
        let instrLen = 0;
        const instrC = ctx.parentCtx?.parentCtx as InstrContext;

        if (instrC !== undefined) {
            instrLen = instrC.INSTR_MODE().symbol.text.length
        }

        let line = " ".repeat(INSTR_SPACING - instrLen)


        return line + this.visit(ctx.anr())
    }
    visitNo_arg: (ctx: No_argContext) => string = () => ""
    visitVar: ((ctx: VarContext) => string) = ctx => {
        let post: string

        if (ctx.number_()) {
            post = " " + this.visit(ctx.number_())
        } else {
            post = ""
        }

        return this.visit(ctx.RESGR()) + post;
    }

    myGetText(node: TerminalNode & ParserRuleContext): string {
        if (node.getChildCount() == 0) {
            const t = node.symbol;
            // @ts-ignore: ANTLR4 FIX YOUR TS TARGET
            const tokensBefore = this.tokenStream.getHiddenTokensToLeft(t.tokenIndex, 1)

            let before = ""

            if (tokensBefore) {

                for (const token of tokensBefore) {
                    before += token.type === DramaLexer.COMMENT ?
                        " ".repeat(this.currentLinePos !== 0 ? 1 + this.codeStats.totalMaxLineLength - this.currentLinePos : this.getCommentSpacing())
                        + pleaseThyComment(token.text) :
                        token.text;
                }
            }

            // Do not add the last EOL, we force add one and then we omit it, reduces complexity
            if (node.symbol.tokenIndex === this.tokenStream.tokens.length - 2) {
                return before
            }
            return before + node.getText()

        }
        return node.children?.map((node1: any) => this.myGetText(node1)).join() ?? "";
    }

    getCommentSpacing(){
        switch (this.alignConfig.comment) {
            case CommentOptions.Start:
               return 0;
            case CommentOptions.Instruction:
                return this.codeStats.labelLength;
            case CommentOptions.End:
                return 1 + this.codeStats.totalMaxLineLength - this.currentLinePos;
            default:
               return 0;
        }
    }
}

function pleaseThyComment(comment: string): string {
    if (comment[0] === "|" && comment.length > 1 && comment[1].trim() !== "") { // verifies that the first character is a pipeline and the next character is not whitespace
        return "| " + comment.slice(1)
    }

    return comment
}


export function formatInput(inputStream: CharStream, config: vscode.WorkspaceConfiguration) {

    const lexer = new DramaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new DramaParser(tokenStream);
    parser._errHandler = new LineErrorStrategy();
    parser.removeErrorListeners()
    
    const parseTree = parser.start();
    const visitor = new FormatCodeVisitor(parseTree, tokenStream, config);

    const newCode = parseTree.accept(visitor);
    return newCode;
}

interface Alignment { label: AlignOptions, comment: CommentOptions }

enum AlignOptions {
    Left = "Left",
    Center = "Center",
    Right = "Right",
}


enum CommentOptions {
    Start = "Start",
    Instruction = "Instruction",
    End = "End",
}
