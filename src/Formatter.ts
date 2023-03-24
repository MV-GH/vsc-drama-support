import { CommonTokenStream, ParserRuleContext, TerminalNode, ErrorNode } from 'antlr4';
import DramaLexer from './antlr/DRAMA_Lexer';
import DramaParser, { InstrContext, LineContext, No_argContext, Single_argContext, VarContext } from './antlr/drama';
import DramaVisitor from './antlr/dramaVisitor';
import { StartContext, LabelContext, Double_argContext } from './antlr/drama';
import { CharStream } from 'antlr4';
import CodeStats from './LongestVisitor';

export const FIRST_ARG_SPACES = 7;


class FormatCodeVisitor extends DramaVisitor<string> {
    tokenStream: CommonTokenStream;
    lineCount!: number;
    currentLineIndex = 1;
    currentPosition = 0;
    codeStats: CodeStats;

    constructor(parseTree: StartContext, tokenStream: CommonTokenStream) {
        super();
        this.lineCount = parseTree.getChildCount();
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
        else if (ctx.symbol.type === DramaParser.EOL) {
            this.currentLineIndex++;
        }
        return myGetText(ctx, this.tokenStream, this.currentLineIndex === this.lineCount)
    }

    visitErrorNode(node: ErrorNode): string {
        return node.getText()
    }

    visitLabel: (ctx: LabelContext) => string = (ctx) => {
        return ctx.ID().symbol.text.padStart(this.codeStats.labelLength) + ": "
    }
    visitLine: (ctx: LineContext) => string = (ctx) => {
        this.currentPosition = 0;
        const labelLen = this.codeStats.labelLength + 2;
        let newLine = "";
        if (ctx.label()) {
            this.currentPosition = labelLen;
            newLine += this.visit(ctx.label())
        } else if (ctx.instr()) {
            this.currentPosition = labelLen
            newLine = " ".repeat(labelLen) //todo no labels
        }

        if (ctx.instr()) {
            newLine += this.visit(ctx.instr())
        }

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

}


function myGetText(node: TerminalNode & ParserRuleContext, tokenStream: CommonTokenStream, last: boolean = false): string {
    if (node.getChildCount() == 0) {
        const t = node.symbol;
        // @ts-ignore: ANTLR4 FIX YOUR TS TARGET
        const tokensBefore = tokenStream.getHiddenTokensToLeft(t.tokenIndex, 1)

        let before = ""

        if (tokensBefore) {
            for (const token of tokensBefore) {
                before += token.type === DramaLexer.COMMENT ? pleaseThyComment(token.text) : token.text;
            }
        }
        return last ? before : before + node.getText()
    }
    return node.children?.map((node1: any) => myGetText(node1, tokenStream, last)).join() ?? "";
}

function pleaseThyComment(comment: string): string {
    if (comment[0] === "|" && comment[1].trim() !== "") { // verifies that the first character is a pipeline and the next character is not whitespace
        return "| " + comment.slice(1)
    }

    return comment
}

export function formatInput(inputStream: CharStream) {

    const lexer = new DramaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new DramaParser(tokenStream);
    const parseTree = parser.start();
    const visitor = new FormatCodeVisitor(parseTree, tokenStream);

    const newCode = parseTree.accept(visitor);
    return newCode;
}