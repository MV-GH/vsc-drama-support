import { CommonTokenStream, ParserRuleContext, TerminalNode, ErrorNode, RuleNode } from 'antlr4';
import DramaLexer from './antlr/DRAMA_Lexer';
import DramaParser, { AnrContext, InstrContext, LineContext, No_argContext, RegContext, Single_argContext, VarContext } from './antlr/drama';
import DramaVisitor from './antlr/dramaVisitor';
import { StartContext, LabelContext, Double_argContext, CdContext } from './antlr/drama';
import { CharStream } from 'antlr4';

const FIRST_ARG_SPACES = 7;

class LongestLabelVisitor extends DramaVisitor<number> {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const labels = ctx.line_list()
            .map(line => line.label())
            .filter(line => line != null);

        if (labels.length == 0)
            return 0;

        const longestLabel: LabelContext = labels.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);

        return longestLabel.accept(this);
    }

    visitLabel: (ctx: LabelContext) => number = (ctx) => ctx.ID().symbol.text.length;
}

class LongestFirstArgVisitor extends DramaVisitor<number> {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const fArgs = ctx.line_list()
            .map(line => line.instr()?.arguments()?.double_arg())
            .filter(arg => arg !== null && arg !== undefined)
            .map(x => x.getChild(0) as RegContext | CdContext);

        if (fArgs.length === 0)
            return 0;

        const longestARg = fArgs.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);


        return (longestARg.accept(this) as unknown as number[])[0];
    }

    visitTerminal: (ctx: TerminalNode & ParserRuleContext) => number = ctx => ctx.symbol.text.length;

}

class LongestSecondArgVisitor extends DramaVisitor<number> {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const fArgs = ctx.line_list()
            .map(line => line.instr()?.arguments()?.double_arg())
            .filter(arg => arg !== null && arg !== undefined)
            .map(x => x.getChild(2) as AnrContext);

        if (fArgs.length === 0)
            return 0;

        const longestARg = fArgs.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);


        return (longestARg.accept(this) as unknown as number[])[0];
    }

    visitTerminal: (ctx: TerminalNode & ParserRuleContext) => number = ctx => ctx.symbol.text.length;

}

class LongestStringVisitor extends DramaVisitor<number> {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const fArgs = ctx.line_list()
            .map(line => line.instr()?.str())
            .filter(arg => arg !== null && arg !== undefined)

        if (fArgs.length === 0)
            return 0;

        const longestARg = fArgs.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);


        return (longestARg.accept(this) as unknown as number[])[0];
    }

    visitTerminal: (ctx: TerminalNode & ParserRuleContext) => number = ctx => ctx.symbol.text.length;
}

class LongestVarVisitor extends DramaVisitor<number> {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const fArgs = ctx.line_list()
            .map(line => line.instr()?.var_())
            .filter(arg => arg !== null && arg !== undefined)

        if (fArgs.length === 0)
            return 0;

        const longestARg = fArgs.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);


        return (longestARg.accept(this) as unknown as number[])[0];
    }

    visitChildren(ctx: ParserRuleContext): number {
        let sum = 0;

        for (let i = 0; i < ctx.getChildCount(); i++) {
            sum += this.visit(ctx.getChild(i));
        }

        return sum;
    }

    visitTerminal: (ctx: TerminalNode & ParserRuleContext) => number = ctx => ctx.symbol.text.length;
}


class FormatCodeVisitor extends DramaVisitor<string> {
    labelLength: number;
    tokenStream: CommonTokenStream;
    lineCount!: number;
    currentLineIndex = 1;
    firstArgLength: number;
    secondArgLength: number;
    totalMaxLineLength: number; // potential to break on single arg instructions, which could be longer
    currentPosition = 0;

    constructor(parseTree: StartContext, tokenStream: CommonTokenStream) {
        super();
        this.lineCount = parseTree.getChildCount();
        this.labelLength = parseTree.accept(new LongestLabelVisitor());
        this.firstArgLength = parseTree.accept(new LongestFirstArgVisitor());
        this.secondArgLength = parseTree.accept(new LongestSecondArgVisitor());
        this.tokenStream = tokenStream;
        this.totalMaxLineLength = this.labelLength + 2 + FIRST_ARG_SPACES + this.firstArgLength + 1 + this.secondArgLength;
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
        return ctx.ID().symbol.text.padStart(this.labelLength) + ": "
    }
    visitLine: (ctx: LineContext) => string = (ctx) => {
        this.currentPosition = 0;
        let newLine = "";
        if (ctx.label()) {
            this.currentPosition = this.labelLength + 2;
            newLine += this.visit(ctx.label())
        } else if (ctx.instr()) {
            this.currentPosition = this.labelLength + 2;
            newLine = " ".repeat(this.labelLength + 2) //todo no labels
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
        line += firstArg.padEnd(this.firstArgLength + 2)
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
        return "| " + comment.slice(2)
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