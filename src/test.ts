import { CommonTokenStream, ParserRuleContext, RuleNode, TerminalNode, CharStreams, ErrorNode } from 'antlr4';
import DramaLexer from './antlr/DRAMA_Lexer';
import DramaParser, { InstrContext, LineContext, No_argContext, Single_argContext, VarContext } from './antlr/drama';
import DramaVisitor from './antlr/dramaVisitor';
import { StartContext, LabelContext, Double_argContext } from './antlr/drama';
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

class FormatCodeVisitor extends DramaVisitor<string> {
    labelLength: number;
    tokenStream: CommonTokenStream;
    lineCount!: number;
    currentLineIndex = 1;

    constructor(labelLength: number, tokenStream: CommonTokenStream) {
        super();
        this.labelLength = labelLength;
        this.tokenStream = tokenStream;
    }


    visitStart: ((ctx: StartContext) => string) = ctx => {
        this.lineCount = ctx.getChildCount();
        return this.visitChildren(ctx);
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
        let newLine = "";
        if (ctx.label()) {
            newLine += this.visit(ctx.label())
        } else if (ctx.instr()) {
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

        let line = " ".repeat(FIRST_ARG_SPACES - instrLen)

        for (let i = 0; i < ctx.getChildCount(); i++) {

            if (ctx.getChildCount() - 1 == i) {
                line += " "
            }
            line += this.visit(ctx.getChild(i));
        }
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
                before += token.text
            }
        }
        return last ? before : before + node.getText()
    }
    return node.children?.map((node1: any) => myGetText(node1, tokenStream, last)).join() ?? "";
}

export function formatInput(inputStream: CharStream) {

    const lexer = new DramaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new DramaParser(tokenStream);
    const parseTree = parser.start();
    const labelLen = parseTree.accept(new LongestLabelVisitor());
    const visitor = new FormatCodeVisitor(labelLen, tokenStream);

    const newCode = parseTree.accept(visitor);
    return newCode;
}