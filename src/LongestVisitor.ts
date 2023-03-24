import { ParserRuleContext, TerminalNode } from "antlr4";
import dramaVisitor from "./antlr/dramaVisitor";

class LongestVisitor extends dramaVisitor<number> {
    
    visitChildren(ctx: ParserRuleContext): number {
        let sum = 0;

        for (let i = 0; i < ctx.getChildCount(); i++) {
            sum += this.visit(ctx.getChild(i));
        }

        return sum;
    }

    visitTerminal: (ctx: TerminalNode & ParserRuleContext) => number = ctx => ctx.symbol.text.length;
}