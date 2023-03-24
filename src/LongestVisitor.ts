import { ParserRuleContext, TerminalNode } from "antlr4";
import { StartContext, LabelContext, RegContext, CdContext, AnrContext } from "./antlr/drama";
import DramaVisitor from "./antlr/dramaVisitor";
import { FIRST_ARG_SPACES } from "./Formatter";

class BaseLongestVisitor extends DramaVisitor<number> {

    visitChildren(ctx: ParserRuleContext): number {
        let sum = 0;

        for (let i = 0; i < ctx.getChildCount(); i++) {
            sum += this.visit(ctx.getChild(i));
        }

        return sum;
    }

    visitTerminal: (ctx: TerminalNode & ParserRuleContext) => number = ctx => ctx.symbol.text.length;
}

class LongestLabelVisitor extends BaseLongestVisitor {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const labels = ctx.line_list()
            .map(line => line.label())
            .filter(line => line != null);

        if (labels.length == 0)
            return 0;

        const longestLabel: LabelContext = labels.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);

        return longestLabel.accept(this);
    }
}

class LongestFirstArgVisitor extends BaseLongestVisitor {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const fArgs = ctx.line_list()
            .map(line => line.instr()?.arguments()?.double_arg())
            .filter(arg => arg !== null && arg !== undefined)
            .map(x => x.getChild(0) as RegContext | CdContext);

        if (fArgs.length === 0)
            return 0;

        const longestARg = fArgs.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);

        return longestARg.accept(this);
    }
}

class LongestSecondArgVisitor extends BaseLongestVisitor {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const fArgs = ctx.line_list()
            .map(line => line.instr()?.arguments()?.double_arg())
            .filter(arg => arg !== null && arg !== undefined)
            .map(x => x.getChild(2) as AnrContext);

        if (fArgs.length === 0)
            return 0;

        const longestARg = fArgs.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);


        return longestARg.accept(this);
    }
}

class LongestStringVisitor extends BaseLongestVisitor {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const fArgs = ctx.line_list()
            .map(line => line.instr()?.str())
            .filter(arg => arg !== null && arg !== undefined)

        if (fArgs.length === 0)
            return 0;

        const longestARg = fArgs.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);


        return longestARg.accept(this);
    }

}

class LongestVarVisitor extends BaseLongestVisitor {
    visitStart: (ctx: StartContext) => number = (ctx) => {

        const fArgs = ctx.line_list()
            .map(line => line.instr()?.var_())
            .filter(arg => arg !== null && arg !== undefined)

        if (fArgs.length === 0)
            return 0;

        const longestARg = fArgs.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);


        return longestARg.accept(this);
    }
}


export default class CodeStats {
    labelLength: number;
    firstArgLength: number;
    secondArgLength: number;
    varLength: number;
    stringLength: number;
    totalMaxLineLength: number; // potential to break on single arg instructions, which could be longer

    constructor(parseTree: StartContext) {
        this.labelLength = parseTree.accept(new LongestLabelVisitor());
        this.firstArgLength = parseTree.accept(new LongestFirstArgVisitor());
        this.secondArgLength = parseTree.accept(new LongestSecondArgVisitor());
        this.varLength = parseTree.accept(new LongestVarVisitor());
        this.stringLength = parseTree.accept(new LongestStringVisitor());
        //FIRST_ARG_SPACES + this.firstArgLength + 1 + this.secondArgLength
        this.totalMaxLineLength = this.labelLength !== 0 ? this.labelLength + 2 : 0;
        this.totalMaxLineLength += FIRST_ARG_SPACES + Math.max(this.stringLength, this.varLength, this.firstArgLength + 1 + this.secondArgLength);
    }
}