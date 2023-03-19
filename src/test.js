import { CharStreams, CommonTokenStream } from 'antlr4';
import DramaLexer from './antlr/DRAMA_Lexer.js';
import DramaParser from './antlr/dramaParser.js';
import DramaVisitor from './antlr/dramaVisitor.js';


const testCode =
    `| test1
|test 2

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

`;

const inputStream = CharStreams.fromString(testCode);
const lexer = new DramaLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new DramaParser(tokenStream);

const parseTree = parser.start();

class LongestLabelVisitor extends DramaVisitor {

    visitStart(ctx) {
        const longestL = ctx.label().reduce((a, b) => a.accept(this) > b.accept(this) ? a : b);
        return longestL.accept(this);
    }
    visitLabel(ctx) {
        return ctx.ID().symbol.text.length;
    }
    visitVar(ctx) {
       //w ctx.
    }
}


export default function test() {
    const visitor = new LongestLabelVisitor();

    const LjsabelLen = parseTree.accept(visitor);

    return LabelLen;
}

console.log(test());