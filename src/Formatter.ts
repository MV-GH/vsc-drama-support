import { CommonTokenStream, ParserRuleContext, TerminalNode, ErrorNode, Token } from 'antlr4';
import DramaLexer from './antlr/DRAMA_Lexer';
import DramaParser, { InstrContext, LineContext, No_argContext, Single_argContext, VarContext } from './antlr/drama';
import DramaVisitor from './antlr/dramaVisitor';
import { StartContext, LabelContext, Double_argContext } from './antlr/drama';
import { CharStream } from 'antlr4';
import CodeStats from './CodeStats';
import * as vscode from 'vscode';
import DRAMA_Lexer from './antlr/DRAMA_Lexer';

export const FIRST_ARG_SPACES = 7;


class FormatCodeVisitor extends DramaVisitor<string> {
    tokenStream: CommonTokenStream;
    currentLinePos = 0;
    codeStats: CodeStats;

    constructor(parseTree: StartContext, tokenStream: CommonTokenStream, config: vscode.WorkspaceConfiguration) {
        super();
        modifyParseTree(tokenStream, config)
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
        return ctx.ID().symbol.text.padStart(this.codeStats.labelLength) + ": "
    }
    visitLine: (ctx: LineContext) => string = (ctx) => {
        let newLine = "";
        if (ctx.label()) {
            newLine += this.visit(ctx.label())
        } else if (ctx.instr()) {
            newLine = " ".repeat(this.codeStats.labelLength === 0 ? 0 : this.codeStats.labelLength + 2)
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

        let line = " ".repeat(FIRST_ARG_SPACES - instrLen) // distance between opcode and first arg

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

        let line = " ".repeat(FIRST_ARG_SPACES - instrLen)


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

    myGetText(node: TerminalNode & ParserRuleContext, last: boolean = false): string {
        if (node.getChildCount() == 0) {
            const t = node.symbol;
            // @ts-ignore: ANTLR4 FIX YOUR TS TARGET
            const tokensBefore = this.tokenStream.getHiddenTokensToLeft(t.tokenIndex, 1)

            let before = ""

            if (tokensBefore) {

                for (const token of tokensBefore) {
                    before += token.type === DramaLexer.COMMENT ?
                        " ".repeat(this.currentLinePos !== 0 ? 1 + this.codeStats.totalMaxLineLength - this.currentLinePos : 0)
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
}

function pleaseThyComment(comment: string): string {
    if (comment[0] === "|" && comment[1].trim() !== "") { // verifies that the first character is a pipeline and the next character is not whitespace
        return "| " + comment.slice(1)
    }

    return comment
}

function modifyParseTree(tokenStream: CommonTokenStream, config: vscode.WorkspaceConfiguration) {

    const casing: Casing = config.get("casing") || { keyword: CaseOptions.DoNotChange, label: CaseOptions.DoNotChange };

    for (const token of tokenStream.tokens as unknown as Token[]) {
        if (token.type === DramaLexer.INSTR_MODE) {
            token.text = token.text.replace(/\s+/g, "")
        }
        if (casing.keyword !== CaseOptions.DoNotChange && isKeyword(token.type)) {
            if (token.type === DramaLexer.INSTR_MODE) {
                const group = token.text.match("^(.+?)(\\.\\w)?$")!;
                token.text = applyCaseOption(group[1], casing.keyword)
                if (group[2] !== undefined) {
                    token.text += group[2].toLowerCase()
                }
            } else {
                token.text = applyCaseOption(token.text, casing.keyword)
            }


        } else if (isLabel(token.type) && casing.label !== CaseOptions.DoNotChange) {
            token.text = applyCaseOption(token.text, casing.label)
        }
    }

}

function applyCaseOption(text: string, caseOption: CaseOptions) {
    return caseOption === CaseOptions.ToUpper ? text.toUpperCase() : text.toLowerCase()
}

function isKeyword(type: number) {
    return [DramaLexer.REGISTER, DramaLexer.CD, DramaLexer.INSTR_MODE, DRAMA_Lexer.INSTR, DRAMA_Lexer.RESGR, DRAMA_Lexer.EINDPR].includes(type);
}
function isLabel(type: number) {
    return DramaLexer.ID === type;
}

interface Casing { keyword: CaseOptions; label: CaseOptions }

enum CaseOptions {
    DoNotChange = "Do not change",
    ToUpper = "To upper",
    ToLower = "To lower",
}


export function formatInput(inputStream: CharStream, config: vscode.WorkspaceConfiguration) {

    const lexer = new DramaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new DramaParser(tokenStream);
    const parseTree = parser.start();
    const visitor = new FormatCodeVisitor(parseTree, tokenStream, config);

    const newCode = parseTree.accept(visitor);
    return newCode;
}

