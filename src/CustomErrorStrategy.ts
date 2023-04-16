import { BailErrorStrategy, CommonToken, Interval, Parser, ParserRuleContext, RecognitionException, RuleContext, TerminalNode, Token } from "antlr4";
import DRAMA_Lexer from "./antlr/DRAMA_Lexer";
import { LineContext, StartContext } from "./antlr/drama";
import { SkipLineError } from "./Constants";

// Creating a custom Strategy requires in depth knowledge of antlr4 which I do not have, so this custom ErrorStrategy may not be the best.

export default class LineErrorStrategy extends BailErrorStrategy {
    constructor() {
        super();
    }

    recover(recognizer: Parser, e: RecognitionException): void {
        throw new SkipLineError();
    }

    recoverInline(recognizer: Parser): any {
        throw new SkipLineError();
    }

    consumeUntilEOL(recognizer: Parser) {
        let ttype = recognizer.getTokenStream().LA(1)
        while (ttype !== Token.EOF && ttype !== DRAMA_Lexer.EOL) {
            recognizer.consume();
            ttype = recognizer.getTokenStream().LA(1);
        }
        if (ttype === DRAMA_Lexer.EOL) {
            recognizer.consume();
        }

    }

    reportError(recognizer: Parser, e: RecognitionException): void {
        const s = getStartContext(recognizer._ctx); // removes this node with errors
        s.children?.pop();
        this.consumeUntilEOL(recognizer);
        addErrorToken(recognizer);
    }
}

function getStartContext(ctx: ParserRuleContext) {
    let p = ctx.parentCtx as ParserRuleContext;
    while (!(p instanceof StartContext)) {
        p = p.parentCtx as ParserRuleContext;
    }
    return p;
}

function addErrorToken(recognizer: Parser) {
    const lexer = (recognizer.getTokenStream() as any).tokenSource
    const source = lexer._tokenFactorySourcePair;
    const s = getStartContext(recognizer._ctx);
    const l = (s.children?.at(-1) as unknown as LineContext || TerminalNode || null);

    const k = l instanceof LineContext ? l?.children?.at(-1) as TerminalNode : l; // else its an errorToken
    const start = k?.symbol?.stop + 1 || 0;
    const startLine = k?.symbol?.line + 1 || 0;

    const prevToken = recognizer._input.LT(-1);
    const end =  recognizer._input.LA(1) === Token.EOF ? prevToken.start - 1 : prevToken.stop; // Dont include the last EOL (this one we added manually)s
    const text = lexer._input.getText(start, end)
    const token = lexer._factory.create(source, 69999999, text, 0, start, end, startLine, 0);

    (s as any).addErrorNode(token);
}