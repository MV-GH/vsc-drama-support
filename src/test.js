import { CharStream, CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4';
import DramaLexer from './antlr/DRAMA_Lexer.js';
import DramaParser from './antlr/drama.js';
import DramaVisitor from './antlr/dramaVisitor.js';


const testCode =
    `|test8
|test9

HIA R0, R1
hiA R0, R5
 HIA.a r0, R9
 HIA.i r0, R9 |test5
 HIA.i r0, R9|test3
BIG R5, 1000
BIG R0, a
a:HIA R5, R1
BIG R1, R1

main: HIA.a R0, r
BST R0
HIA.i R8, R9
BST R8
sbr lees
sbr schrijfOmgekeerd
HST R8
HST R0
STP 
| func lees
| P: r: -1(R8)
| LV: i: R6 
lees: BST R1 
HIA R1, -1(R8)
HIA.w R6, 0
for: VGL.w R6, 10
VSP GRG, for_end
LEZ
BIG R0, 0(R1+)
OPT.w R6, 1
SPR for
for_end: HST R1
KTG
| func schrijfOmgekeerd
| P: r: -1(R8)
| LV: i: R6 
schrijfOmgekeerd: BST R1 
HIA R1, -1(R8)
HIA.w R6, 9
for2: VGL.w R6, 0
VSP KL, for2_end
HIA R0, 9(R1-)
AFT.w R6, 1
DRU
NWL
SPR for2
for2_end: HST R1
KTG
r: RESGR 10
EINDPR

`

class LongestLabelVisitor extends DramaVisitor {

    visitStart(ctx) {

        const labels = ctx.line()
            .map(line => line.label())
            .filter(line => line != null);

        if (labels.length == 0)
            return 0;

        const longestLabel = labels.reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);

        return longestLabel.accept(this);
    }
    visitLabel(ctx) {
        return ctx.ID().symbol.text.length;
    }
}

class FormatCodeVisitor extends DramaVisitor {
    constructor(labelLength, tokenStream) {
        super();
        this.labelLength = labelLength;
        this.tokenStream = tokenStream;
    }


    visitChildren(ctx) {
        let code = '';

        for (let i = 0; i < ctx.getChildCount(); i++) {
            code += this.visit(ctx.getChild(i));
        }

        return code;
    }

    visitTerminal(ctx) {
        return myGetText(ctx, this.tokenStream);
    }

    visitLabel(ctx) {
        return ctx.ID().symbol.text.padStart(this.labelLength) + ": "
    }
    visitLine(ctx) {
        let newLine = "";
        if (ctx.label()) {
            newLine += this.visit(ctx.label())
        } else if (ctx.instr()) {
            newLine = " ".repeat(this.labelLength + 2) //todo no labels
        }
        if (ctx.instr()) {
            newLine += this.visit(ctx.instr())
        }

        if (ctx.EOL()) {
            newLine += ctx.EOL().accept(this)
        }
        return newLine
    }

    visitDouble_arg(ctx) {
        let line = " "

        for (let i = 0; i < ctx.getChildCount(); i++) {

            if (ctx.getChildCount() - 1 == i) {
                line += " "
            }
            line += this.visit(ctx.getChild(i));
        }
        return line
    }


    visitSingle_arg(ctx) {
        return " " + this.visit(ctx.anr())
    }
    visitNo_arg() { return "" }
}

function test() {
    const visitor = new LongestLabelVisitor();

    const labelLen = parseTree.accept(visitor);

    return labelLen;
}




function myGetText(node, tokenStream) {
    if (node.getChildCount() == 0) {
        const t = node.symbol;
        const tokensBefore = tokenStream.getHiddenTokensToLeft(t.tokenIndex, 1)

        let before = ""

        if (tokensBefore) {
            for (const token of tokensBefore) {
                before += token.text
            }
        }
        return before + node.getText()
    }
    return node.children.map(node1 => myGetText(node1, tokenStream)).join();
}

/**
 * 
 * @param {CharStream} inputStream 
 */
export function formatInput(inputStream) {

    //const inputStream = CharStreams.fromString(testCode);
    const lexer = new DramaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new DramaParser(tokenStream);
    const parseTree = parser.start();
    const labelLen = parseTree.accept(new LongestLabelVisitor());
    const visitor = new FormatCodeVisitor(labelLen, tokenStream);

    const newCode = parseTree.accept(visitor);
    return newCode;
}
