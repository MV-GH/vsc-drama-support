// Generated from grammars/DRAMA_Lexer.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class DRAMA_Lexer extends Lexer {
	public static readonly COMMENT = 1;
	public static readonly STR = 2;
	public static readonly INSTR_MODE = 3;
	public static readonly MODE = 4;
	public static readonly WS = 5;
	public static readonly HIA = 6;
	public static readonly BIG = 7;
	public static readonly OPT = 8;
	public static readonly AFT = 9;
	public static readonly DEL = 10;
	public static readonly VER = 11;
	public static readonly MOD = 12;
	public static readonly VSP = 13;
	public static readonly VGL = 14;
	public static readonly BST = 15;
	public static readonly HST = 16;
	public static readonly SBR = 17;
	public static readonly SPR = 18;
	public static readonly DRU = 19;
	public static readonly NWL = 20;
	public static readonly LEZ = 21;
	public static readonly DRS = 22;
	public static readonly KTG = 23;
	public static readonly STP = 24;
	public static readonly INSTR = 25;
	public static readonly EINDPR = 26;
	public static readonly RESGR = 27;
	public static readonly REGISTER = 28;
	public static readonly CD = 29;
	public static readonly NUL = 30;
	public static readonly NNUL = 31;
	public static readonly POS = 32;
	public static readonly NPOS = 33;
	public static readonly NEG = 34;
	public static readonly NNEG = 35;
	public static readonly GEL = 36;
	public static readonly NGEL = 37;
	public static readonly GR = 38;
	public static readonly KLG = 39;
	public static readonly KL = 40;
	public static readonly GRG = 41;
	public static readonly ID = 42;
	public static readonly EOL = 43;
	public static readonly INT = 44;
	public static readonly DOT = 45;
	public static readonly COMMA = 46;
	public static readonly PIPELINE = 47;
	public static readonly UNDERSCORE = 48;
	public static readonly MINUS = 49;
	public static readonly PLUS = 50;
	public static readonly COLON = 51;
	public static readonly SEMI_COLON = 52;
	public static readonly LP = 53;
	public static readonly RP = 54;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string| null)[] = [ null, null, null, null, 
                                                   null, null, "'HIA'", 
                                                   "'BIG'", "'OPT'", "'AFT'", 
                                                   "'DEL'", "'VER'", "'MOD'", 
                                                   "'VSP'", "'VGL'", "'BST'", 
                                                   "'HST'", "'SBR'", "'SPR'", 
                                                   "'DRU'", "'NWL'", "'LEZ'", 
                                                   "'DRS'", "'KTG'", "'STP'", 
                                                   null, "'EINDPR'", "'RESGR'", 
                                                   null, null, "'NUL'", 
                                                   "'NNUL'", "'POS'", "'NPOS'", 
                                                   "'NEG'", "'NNEG'", "'GEL'", 
                                                   "'NGEL'", "'GR'", "'KLG'", 
                                                   "'KL'", "'GRG'", null, 
                                                   null, null, "'.'", "','", 
                                                   "'|'", "'_'", "'-'", 
                                                   "'+'", "':'", "';'", 
                                                   "'('", "')'" ];
	public static readonly symbolicNames: (string| null)[] = [ null, "COMMENT", "STR", 
                                                    "INSTR_MODE", "MODE", 
                                                    "WS", "HIA", "BIG", 
                                                    "OPT", "AFT", "DEL", 
                                                    "VER", "MOD", "VSP", 
                                                    "VGL", "BST", "HST", 
                                                    "SBR", "SPR", "DRU", 
                                                    "NWL", "LEZ", "DRS", 
                                                    "KTG", "STP", "INSTR", 
                                                    "EINDPR", "RESGR", "REGISTER", 
                                                    "CD", "NUL", "NNUL", 
                                                    "POS", "NPOS", "NEG", 
                                                    "NNEG", "GEL", "NGEL", 
                                                    "GR", "KLG", "KL", "GRG", 
                                                    "ID", "EOL", "INT", 
                                                    "DOT", "COMMA", "PIPELINE", 
                                                    "UNDERSCORE", "MINUS", 
                                                    "PLUS", "COLON", "SEMI_COLON", 
                                                    "LP", "RP" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"COMMENT", "STR", "INSTR_MODE", "MODE", "WS", "HIA", "BIG", "OPT", "AFT", 
		"DEL", "VER", "MOD", "VSP", "VGL", "BST", "HST", "SBR", "SPR", "DRU", 
		"NWL", "LEZ", "DRS", "KTG", "STP", "INSTR", "EINDPR", "RESGR", "REGISTER", 
		"CD", "NUL", "NNUL", "POS", "NPOS", "NEG", "NNEG", "GEL", "NGEL", "GR", 
		"KLG", "KL", "GRG", "ID", "EOL", "INT", "DOT", "COMMA", "PIPELINE", "UNDERSCORE", 
		"MINUS", "PLUS", "COLON", "SEMI_COLON", "LP", "RP", "W", "D", "A",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, DRAMA_Lexer._ATN, DRAMA_Lexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "DRAMA_Lexer.g4"; }

	public get literalNames(): (string | null)[] { return DRAMA_Lexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return DRAMA_Lexer.symbolicNames; }
	public get ruleNames(): string[] { return DRAMA_Lexer.ruleNames; }

	public get serializedATN(): number[] { return DRAMA_Lexer._serializedATN; }

	public get channelNames(): string[] { return DRAMA_Lexer.channelNames; }

	public get modeNames(): string[] { return DRAMA_Lexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,54,380,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,
	45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
	2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,1,0,1,0,5,0,118,8,0,10,0,12,0,121,
	9,0,1,0,1,0,1,1,1,1,5,1,127,8,1,10,1,12,1,130,9,1,1,1,1,1,1,2,1,2,3,2,136,
	8,2,1,3,3,3,139,8,3,1,3,1,3,3,3,143,8,3,1,3,1,3,1,4,4,4,148,8,4,11,4,12,
	4,149,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,
	8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,
	1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,
	16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,
	1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,
	23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
	1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,249,8,24,1,25,1,25,1,25,1,25,1,
	25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,
	1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,279,8,28,1,29,1,29,1,
	29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,
	1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,
	36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,39,1,39,1,39,
	1,40,1,40,1,40,1,40,1,41,1,41,3,41,333,8,41,1,41,1,41,5,41,337,8,41,10,
	41,12,41,340,9,41,1,42,3,42,343,8,42,1,42,1,42,1,43,4,43,348,8,43,11,43,
	12,43,349,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,
	50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,54,3,54,375,8,54,1,55,
	1,55,1,56,1,56,0,0,57,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,
	11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,
	23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,
	35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,
	47,95,48,97,49,99,50,101,51,103,52,105,53,107,54,109,0,111,0,113,0,1,0,
	26,2,0,10,10,13,13,3,0,10,10,13,13,34,34,3,0,9,9,12,12,32,32,2,0,72,72,
	104,104,2,0,73,73,105,105,2,0,65,65,97,97,2,0,66,66,98,98,2,0,71,71,103,
	103,2,0,79,79,111,111,2,0,80,80,112,112,2,0,84,84,116,116,2,0,70,70,102,
	102,2,0,68,68,100,100,2,0,69,69,101,101,2,0,76,76,108,108,2,0,86,86,118,
	118,2,0,82,82,114,114,2,0,77,77,109,109,2,0,83,83,115,115,2,0,85,85,117,
	117,2,0,78,78,110,110,2,0,87,87,119,119,2,0,90,90,122,122,2,0,75,75,107,
	107,1,0,48,57,2,0,65,90,97,122,418,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,
	0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,
	0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,
	29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,
	0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,
	51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,
	0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,
	73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,
	0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,
	95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,
	1,0,0,0,0,107,1,0,0,0,1,115,1,0,0,0,3,124,1,0,0,0,5,133,1,0,0,0,7,138,1,
	0,0,0,9,147,1,0,0,0,11,153,1,0,0,0,13,157,1,0,0,0,15,161,1,0,0,0,17,165,
	1,0,0,0,19,169,1,0,0,0,21,173,1,0,0,0,23,177,1,0,0,0,25,181,1,0,0,0,27,
	185,1,0,0,0,29,189,1,0,0,0,31,193,1,0,0,0,33,197,1,0,0,0,35,201,1,0,0,0,
	37,205,1,0,0,0,39,209,1,0,0,0,41,213,1,0,0,0,43,217,1,0,0,0,45,221,1,0,
	0,0,47,225,1,0,0,0,49,248,1,0,0,0,51,250,1,0,0,0,53,257,1,0,0,0,55,263,
	1,0,0,0,57,278,1,0,0,0,59,280,1,0,0,0,61,284,1,0,0,0,63,289,1,0,0,0,65,
	293,1,0,0,0,67,298,1,0,0,0,69,302,1,0,0,0,71,307,1,0,0,0,73,311,1,0,0,0,
	75,316,1,0,0,0,77,319,1,0,0,0,79,323,1,0,0,0,81,326,1,0,0,0,83,332,1,0,
	0,0,85,342,1,0,0,0,87,347,1,0,0,0,89,351,1,0,0,0,91,353,1,0,0,0,93,355,
	1,0,0,0,95,357,1,0,0,0,97,359,1,0,0,0,99,361,1,0,0,0,101,363,1,0,0,0,103,
	365,1,0,0,0,105,367,1,0,0,0,107,369,1,0,0,0,109,374,1,0,0,0,111,376,1,0,
	0,0,113,378,1,0,0,0,115,119,3,93,46,0,116,118,8,0,0,0,117,116,1,0,0,0,118,
	121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,122,1,0,0,0,121,119,1,0,
	0,0,122,123,6,0,0,0,123,2,1,0,0,0,124,128,5,34,0,0,125,127,8,1,0,0,126,
	125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,131,1,0,
	0,0,130,128,1,0,0,0,131,132,5,34,0,0,132,4,1,0,0,0,133,135,3,49,24,0,134,
	136,3,7,3,0,135,134,1,0,0,0,135,136,1,0,0,0,136,6,1,0,0,0,137,139,3,9,4,
	0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,142,3,89,44,0,141,
	143,3,9,4,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,3,113,
	56,0,145,8,1,0,0,0,146,148,7,2,0,0,147,146,1,0,0,0,148,149,1,0,0,0,149,
	147,1,0,0,0,149,150,1,0,0,0,150,151,1,0,0,0,151,152,6,4,1,0,152,10,1,0,
	0,0,153,154,7,3,0,0,154,155,7,4,0,0,155,156,7,5,0,0,156,12,1,0,0,0,157,
	158,7,6,0,0,158,159,7,4,0,0,159,160,7,7,0,0,160,14,1,0,0,0,161,162,7,8,
	0,0,162,163,7,9,0,0,163,164,7,10,0,0,164,16,1,0,0,0,165,166,7,5,0,0,166,
	167,7,11,0,0,167,168,7,10,0,0,168,18,1,0,0,0,169,170,7,12,0,0,170,171,7,
	13,0,0,171,172,7,14,0,0,172,20,1,0,0,0,173,174,7,15,0,0,174,175,7,13,0,
	0,175,176,7,16,0,0,176,22,1,0,0,0,177,178,7,17,0,0,178,179,7,8,0,0,179,
	180,7,12,0,0,180,24,1,0,0,0,181,182,7,15,0,0,182,183,7,18,0,0,183,184,7,
	9,0,0,184,26,1,0,0,0,185,186,7,15,0,0,186,187,7,7,0,0,187,188,7,14,0,0,
	188,28,1,0,0,0,189,190,7,6,0,0,190,191,7,18,0,0,191,192,7,10,0,0,192,30,
	1,0,0,0,193,194,7,3,0,0,194,195,7,18,0,0,195,196,7,10,0,0,196,32,1,0,0,
	0,197,198,7,18,0,0,198,199,7,6,0,0,199,200,7,16,0,0,200,34,1,0,0,0,201,
	202,7,18,0,0,202,203,7,9,0,0,203,204,7,16,0,0,204,36,1,0,0,0,205,206,7,
	12,0,0,206,207,7,16,0,0,207,208,7,19,0,0,208,38,1,0,0,0,209,210,7,20,0,
	0,210,211,7,21,0,0,211,212,7,14,0,0,212,40,1,0,0,0,213,214,7,14,0,0,214,
	215,7,13,0,0,215,216,7,22,0,0,216,42,1,0,0,0,217,218,7,12,0,0,218,219,7,
	16,0,0,219,220,7,18,0,0,220,44,1,0,0,0,221,222,7,23,0,0,222,223,7,10,0,
	0,223,224,7,7,0,0,224,46,1,0,0,0,225,226,7,18,0,0,226,227,7,10,0,0,227,
	228,7,9,0,0,228,48,1,0,0,0,229,249,3,11,5,0,230,249,3,13,6,0,231,249,3,
	15,7,0,232,249,3,17,8,0,233,249,3,19,9,0,234,249,3,21,10,0,235,249,3,23,
	11,0,236,249,3,25,12,0,237,249,3,27,13,0,238,249,3,29,14,0,239,249,3,31,
	15,0,240,249,3,33,16,0,241,249,3,35,17,0,242,249,3,37,18,0,243,249,3,39,
	19,0,244,249,3,41,20,0,245,249,3,43,21,0,246,249,3,45,22,0,247,249,3,47,
	23,0,248,229,1,0,0,0,248,230,1,0,0,0,248,231,1,0,0,0,248,232,1,0,0,0,248,
	233,1,0,0,0,248,234,1,0,0,0,248,235,1,0,0,0,248,236,1,0,0,0,248,237,1,0,
	0,0,248,238,1,0,0,0,248,239,1,0,0,0,248,240,1,0,0,0,248,241,1,0,0,0,248,
	242,1,0,0,0,248,243,1,0,0,0,248,244,1,0,0,0,248,245,1,0,0,0,248,246,1,0,
	0,0,248,247,1,0,0,0,249,50,1,0,0,0,250,251,7,13,0,0,251,252,7,4,0,0,252,
	253,7,20,0,0,253,254,7,12,0,0,254,255,7,9,0,0,255,256,7,16,0,0,256,52,1,
	0,0,0,257,258,7,16,0,0,258,259,7,13,0,0,259,260,7,18,0,0,260,261,7,7,0,
	0,261,262,7,16,0,0,262,54,1,0,0,0,263,264,7,16,0,0,264,265,3,111,55,0,265,
	56,1,0,0,0,266,279,3,59,29,0,267,279,3,61,30,0,268,279,3,63,31,0,269,279,
	3,65,32,0,270,279,3,67,33,0,271,279,3,69,34,0,272,279,3,71,35,0,273,279,
	3,73,36,0,274,279,3,75,37,0,275,279,3,77,38,0,276,279,3,79,39,0,277,279,
	3,81,40,0,278,266,1,0,0,0,278,267,1,0,0,0,278,268,1,0,0,0,278,269,1,0,0,
	0,278,270,1,0,0,0,278,271,1,0,0,0,278,272,1,0,0,0,278,273,1,0,0,0,278,274,
	1,0,0,0,278,275,1,0,0,0,278,276,1,0,0,0,278,277,1,0,0,0,279,58,1,0,0,0,
	280,281,7,20,0,0,281,282,7,19,0,0,282,283,7,14,0,0,283,60,1,0,0,0,284,285,
	7,20,0,0,285,286,7,20,0,0,286,287,7,19,0,0,287,288,7,14,0,0,288,62,1,0,
	0,0,289,290,7,9,0,0,290,291,7,8,0,0,291,292,7,18,0,0,292,64,1,0,0,0,293,
	294,7,20,0,0,294,295,7,9,0,0,295,296,7,8,0,0,296,297,7,18,0,0,297,66,1,
	0,0,0,298,299,7,20,0,0,299,300,7,13,0,0,300,301,7,7,0,0,301,68,1,0,0,0,
	302,303,7,20,0,0,303,304,7,20,0,0,304,305,7,13,0,0,305,306,7,7,0,0,306,
	70,1,0,0,0,307,308,7,7,0,0,308,309,7,13,0,0,309,310,7,14,0,0,310,72,1,0,
	0,0,311,312,7,20,0,0,312,313,7,7,0,0,313,314,7,13,0,0,314,315,7,14,0,0,
	315,74,1,0,0,0,316,317,7,7,0,0,317,318,7,16,0,0,318,76,1,0,0,0,319,320,
	7,23,0,0,320,321,7,14,0,0,321,322,7,7,0,0,322,78,1,0,0,0,323,324,7,23,0,
	0,324,325,7,14,0,0,325,80,1,0,0,0,326,327,7,7,0,0,327,328,7,16,0,0,328,
	329,7,7,0,0,329,82,1,0,0,0,330,333,3,113,56,0,331,333,3,95,47,0,332,330,
	1,0,0,0,332,331,1,0,0,0,333,338,1,0,0,0,334,337,3,109,54,0,335,337,3,89,
	44,0,336,334,1,0,0,0,336,335,1,0,0,0,337,340,1,0,0,0,338,336,1,0,0,0,338,
	339,1,0,0,0,339,84,1,0,0,0,340,338,1,0,0,0,341,343,5,13,0,0,342,341,1,0,
	0,0,342,343,1,0,0,0,343,344,1,0,0,0,344,345,5,10,0,0,345,86,1,0,0,0,346,
	348,3,111,55,0,347,346,1,0,0,0,348,349,1,0,0,0,349,347,1,0,0,0,349,350,
	1,0,0,0,350,88,1,0,0,0,351,352,5,46,0,0,352,90,1,0,0,0,353,354,5,44,0,0,
	354,92,1,0,0,0,355,356,5,124,0,0,356,94,1,0,0,0,357,358,5,95,0,0,358,96,
	1,0,0,0,359,360,5,45,0,0,360,98,1,0,0,0,361,362,5,43,0,0,362,100,1,0,0,
	0,363,364,5,58,0,0,364,102,1,0,0,0,365,366,5,59,0,0,366,104,1,0,0,0,367,
	368,5,40,0,0,368,106,1,0,0,0,369,370,5,41,0,0,370,108,1,0,0,0,371,375,3,
	113,56,0,372,375,3,111,55,0,373,375,3,95,47,0,374,371,1,0,0,0,374,372,1,
	0,0,0,374,373,1,0,0,0,375,110,1,0,0,0,376,377,7,24,0,0,377,112,1,0,0,0,
	378,379,7,25,0,0,379,114,1,0,0,0,15,0,119,128,135,138,142,149,248,278,332,
	336,338,342,349,374,2,0,1,0,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DRAMA_Lexer.__ATN) {
			DRAMA_Lexer.__ATN = new ATNDeserializer().deserialize(DRAMA_Lexer._serializedATN);
		}

		return DRAMA_Lexer.__ATN;
	}


	static DecisionsToDFA = DRAMA_Lexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}