// Generated from definitions/drama.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import dramaVisitor from './dramaVisitor.js';

const serializedATN = [4,1,57,183,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,3,0,40,8,
0,1,0,1,0,3,0,44,8,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,69,8,1,1,2,1,2,3,2,73,
8,2,1,2,1,2,1,2,1,2,1,3,1,3,3,3,81,8,3,1,3,1,3,1,3,1,3,1,4,1,4,3,4,89,8,
4,1,4,1,4,1,4,1,4,1,5,1,5,3,5,97,8,5,1,5,1,5,1,5,1,5,1,6,1,6,3,6,105,8,6,
1,6,1,6,1,6,1,6,1,7,1,7,3,7,113,8,7,1,7,1,7,1,7,1,7,1,8,1,8,3,8,121,8,8,
1,8,1,8,1,8,1,8,1,9,1,9,3,9,129,8,9,1,9,1,9,1,9,1,9,1,10,1,10,3,10,137,8,
10,1,10,1,10,1,11,1,11,3,11,143,8,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,
1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,3,16,164,8,16,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,175,8,17,1,17,3,17,178,
8,17,1,18,1,18,1,18,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,0,0,196,0,47,1,0,0,0,2,68,1,0,0,0,4,70,1,0,0,0,6,78,1,0,0,0,
8,86,1,0,0,0,10,94,1,0,0,0,12,102,1,0,0,0,14,110,1,0,0,0,16,118,1,0,0,0,
18,126,1,0,0,0,20,134,1,0,0,0,22,140,1,0,0,0,24,146,1,0,0,0,26,149,1,0,0,
0,28,152,1,0,0,0,30,157,1,0,0,0,32,163,1,0,0,0,34,177,1,0,0,0,36,179,1,0,
0,0,38,40,3,36,18,0,39,38,1,0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,43,3,2,
1,0,42,44,5,44,0,0,43,42,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,39,1,0,0,
0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,
50,51,5,0,0,1,51,1,1,0,0,0,52,69,3,4,2,0,53,69,3,6,3,0,54,69,3,8,4,0,55,
69,3,10,5,0,56,69,3,12,6,0,57,69,3,14,7,0,58,69,3,16,8,0,59,69,3,28,14,0,
60,69,3,18,9,0,61,69,3,20,10,0,62,69,3,22,11,0,63,69,3,26,13,0,64,69,3,24,
12,0,65,69,5,3,0,0,66,69,3,30,15,0,67,69,5,23,0,0,68,52,1,0,0,0,68,53,1,
0,0,0,68,54,1,0,0,0,68,55,1,0,0,0,68,56,1,0,0,0,68,57,1,0,0,0,68,58,1,0,
0,0,68,59,1,0,0,0,68,60,1,0,0,0,68,61,1,0,0,0,68,62,1,0,0,0,68,63,1,0,0,
0,68,64,1,0,0,0,68,65,1,0,0,0,68,66,1,0,0,0,68,67,1,0,0,0,69,3,1,0,0,0,70,
72,5,4,0,0,71,73,5,26,0,0,72,71,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,75,
5,25,0,0,75,76,5,47,0,0,76,77,3,32,16,0,77,5,1,0,0,0,78,80,5,5,0,0,79,81,
5,26,0,0,80,79,1,0,0,0,80,81,1,0,0,0,81,82,1,0,0,0,82,83,5,25,0,0,83,84,
5,47,0,0,84,85,3,32,16,0,85,7,1,0,0,0,86,88,5,6,0,0,87,89,5,26,0,0,88,87,
1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,91,5,25,0,0,91,92,5,47,0,0,92,93,
3,32,16,0,93,9,1,0,0,0,94,96,5,7,0,0,95,97,5,26,0,0,96,95,1,0,0,0,96,97,
1,0,0,0,97,98,1,0,0,0,98,99,5,25,0,0,99,100,5,47,0,0,100,101,3,32,16,0,101,
11,1,0,0,0,102,104,5,8,0,0,103,105,5,26,0,0,104,103,1,0,0,0,104,105,1,0,
0,0,105,106,1,0,0,0,106,107,5,25,0,0,107,108,5,47,0,0,108,109,3,32,16,0,
109,13,1,0,0,0,110,112,5,9,0,0,111,113,5,26,0,0,112,111,1,0,0,0,112,113,
1,0,0,0,113,114,1,0,0,0,114,115,5,25,0,0,115,116,5,47,0,0,116,117,3,32,16,
0,117,15,1,0,0,0,118,120,5,10,0,0,119,121,5,26,0,0,120,119,1,0,0,0,120,121,
1,0,0,0,121,122,1,0,0,0,122,123,5,25,0,0,123,124,5,47,0,0,124,125,3,32,16,
0,125,17,1,0,0,0,126,128,5,12,0,0,127,129,5,26,0,0,128,127,1,0,0,0,128,129,
1,0,0,0,129,130,1,0,0,0,130,131,5,25,0,0,131,132,5,47,0,0,132,133,3,32,16,
0,133,19,1,0,0,0,134,136,5,16,0,0,135,137,5,28,0,0,136,135,1,0,0,0,136,137,
1,0,0,0,137,138,1,0,0,0,138,139,3,34,17,0,139,21,1,0,0,0,140,142,5,15,0,
0,141,143,5,28,0,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,
3,34,17,0,145,23,1,0,0,0,146,147,5,13,0,0,147,148,5,25,0,0,148,25,1,0,0,
0,149,150,5,14,0,0,150,151,5,25,0,0,151,27,1,0,0,0,152,153,5,11,0,0,153,
154,5,30,0,0,154,155,5,47,0,0,155,156,3,34,17,0,156,29,1,0,0,0,157,158,3,
36,18,0,158,159,5,24,0,0,159,160,5,29,0,0,160,31,1,0,0,0,161,164,5,25,0,
0,162,164,3,34,17,0,163,161,1,0,0,0,163,162,1,0,0,0,164,33,1,0,0,0,165,178,
5,43,0,0,166,178,5,29,0,0,167,168,5,29,0,0,168,174,5,54,0,0,169,170,5,50,
0,0,170,175,5,25,0,0,171,172,5,25,0,0,172,175,5,50,0,0,173,175,5,25,0,0,
174,169,1,0,0,0,174,171,1,0,0,0,174,173,1,0,0,0,175,176,1,0,0,0,176,178,
5,55,0,0,177,165,1,0,0,0,177,166,1,0,0,0,177,167,1,0,0,0,178,35,1,0,0,0,
179,180,5,43,0,0,180,181,5,53,0,0,181,37,1,0,0,0,17,39,43,47,68,72,80,88,
96,104,112,120,128,136,142,163,174,177];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class dramaParser extends antlr4.Parser {

    static grammarFileName = "drama.g4";
    static literalNames = [ null, null, null, null, "'HIA'", "'BIG'", "'OPT'", 
                            "'AFT'", "'DEL'", "'VER'", "'MOD'", "'VSP'", 
                            "'VGL'", "'BST'", "'HST'", "'SBR'", "'SPR'", 
                            "'DRU'", "'NWL'", "'LEZ'", "'DRS'", "'KTG'", 
                            "'STP'", "'EINDPR'", "'RESGR'", null, null, 
                            null, null, null, null, "'NUL'", "'NNUL'", "'POS'", 
                            "'NPOS'", "'NEG'", "'NNEG'", "'GEL'", "'NGEL'", 
                            "'GR'", "'KLG'", "'KL'", "'GRG'", null, null, 
                            null, "'.'", "','", "'|'", "'_'", null, "'-'", 
                            "'+'", "':'", "'('", "')'" ];
    static symbolicNames = [ null, "COMMENT", "STR", "INSTR_NO_MODE_NO_ARG", 
                             "HIA", "BIG", "OPT", "AFT", "DEL", "VER", "MOD", 
                             "VSP", "VGL", "BST", "HST", "SBR", "SPR", "DRU", 
                             "NWL", "LEZ", "DRS", "KTG", "STP", "EINDPR", 
                             "RESGR", "REGISTER", "FULL_MODE", "HALF_MODE", 
                             "LIMITED_MODE", "NUMBER", "CD", "NUL", "NNUL", 
                             "POS", "NPOS", "NEG", "NNEG", "GEL", "NGEL", 
                             "GR", "KLG", "KL", "GRG", "ID", "NEWLINE", 
                             "INT", "DOT", "COMMA", "PIPELINE", "UNDERSCORE", 
                             "SIGN", "MINUS", "PLUS", "COLON", "LEFT_PAREN", 
                             "RIGHT_PAREN", "WS", "OTHER" ];
    static ruleNames = [ "start", "instr", "hiaI", "bigI", "optI", "aftI", 
                         "delI", "verI", "modI", "vglI", "sprI", "sbrI", 
                         "bstI", "hstI", "vspI", "var", "anr", "adr", "label" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = dramaParser.ruleNames;
        this.literalNames = dramaParser.literalNames;
        this.symbolicNames = dramaParser.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, dramaParser.RULE_start);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8519672) !== 0) || _la===43) {
	            this.state = 39;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            if(la_===1) {
	                this.state = 38;
	                this.label();

	            }
	            this.state = 41;
	            this.instr();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 42;
	                this.match(dramaParser.NEWLINE);
	            }

	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(dramaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instr() {
	    let localctx = new InstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, dramaParser.RULE_instr);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.hiaI();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.bigI();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.optI();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.aftI();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.delI();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 57;
	            this.verI();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 58;
	            this.modI();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 59;
	            this.vspI();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 60;
	            this.vglI();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 61;
	            this.sprI();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 62;
	            this.sbrI();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 63;
	            this.hstI();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 64;
	            this.bstI();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 65;
	            this.match(dramaParser.INSTR_NO_MODE_NO_ARG);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 66;
	            this.var_();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 67;
	            this.match(dramaParser.EINDPR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hiaI() {
	    let localctx = new HiaIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, dramaParser.RULE_hiaI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(dramaParser.HIA);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 71;
	            this.match(dramaParser.FULL_MODE);
	        }

	        this.state = 74;
	        this.match(dramaParser.REGISTER);
	        this.state = 75;
	        this.match(dramaParser.COMMA);
	        this.state = 76;
	        this.anr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bigI() {
	    let localctx = new BigIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, dramaParser.RULE_bigI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(dramaParser.BIG);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 79;
	            this.match(dramaParser.FULL_MODE);
	        }

	        this.state = 82;
	        this.match(dramaParser.REGISTER);
	        this.state = 83;
	        this.match(dramaParser.COMMA);
	        this.state = 84;
	        this.anr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optI() {
	    let localctx = new OptIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, dramaParser.RULE_optI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(dramaParser.OPT);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 87;
	            this.match(dramaParser.FULL_MODE);
	        }

	        this.state = 90;
	        this.match(dramaParser.REGISTER);
	        this.state = 91;
	        this.match(dramaParser.COMMA);
	        this.state = 92;
	        this.anr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aftI() {
	    let localctx = new AftIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, dramaParser.RULE_aftI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(dramaParser.AFT);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 95;
	            this.match(dramaParser.FULL_MODE);
	        }

	        this.state = 98;
	        this.match(dramaParser.REGISTER);
	        this.state = 99;
	        this.match(dramaParser.COMMA);
	        this.state = 100;
	        this.anr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	delI() {
	    let localctx = new DelIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, dramaParser.RULE_delI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(dramaParser.DEL);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 103;
	            this.match(dramaParser.FULL_MODE);
	        }

	        this.state = 106;
	        this.match(dramaParser.REGISTER);
	        this.state = 107;
	        this.match(dramaParser.COMMA);
	        this.state = 108;
	        this.anr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	verI() {
	    let localctx = new VerIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, dramaParser.RULE_verI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(dramaParser.VER);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 111;
	            this.match(dramaParser.FULL_MODE);
	        }

	        this.state = 114;
	        this.match(dramaParser.REGISTER);
	        this.state = 115;
	        this.match(dramaParser.COMMA);
	        this.state = 116;
	        this.anr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	modI() {
	    let localctx = new ModIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, dramaParser.RULE_modI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(dramaParser.MOD);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 119;
	            this.match(dramaParser.FULL_MODE);
	        }

	        this.state = 122;
	        this.match(dramaParser.REGISTER);
	        this.state = 123;
	        this.match(dramaParser.COMMA);
	        this.state = 124;
	        this.anr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vglI() {
	    let localctx = new VglIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, dramaParser.RULE_vglI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(dramaParser.VGL);
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 127;
	            this.match(dramaParser.FULL_MODE);
	        }

	        this.state = 130;
	        this.match(dramaParser.REGISTER);
	        this.state = 131;
	        this.match(dramaParser.COMMA);
	        this.state = 132;
	        this.anr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sprI() {
	    let localctx = new SprIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, dramaParser.RULE_sprI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(dramaParser.SPR);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 135;
	            this.match(dramaParser.LIMITED_MODE);
	        }

	        this.state = 138;
	        this.adr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sbrI() {
	    let localctx = new SbrIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, dramaParser.RULE_sbrI);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(dramaParser.SBR);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 141;
	            this.match(dramaParser.LIMITED_MODE);
	        }

	        this.state = 144;
	        this.adr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bstI() {
	    let localctx = new BstIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, dramaParser.RULE_bstI);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(dramaParser.BST);
	        this.state = 147;
	        this.match(dramaParser.REGISTER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hstI() {
	    let localctx = new HstIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, dramaParser.RULE_hstI);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(dramaParser.HST);
	        this.state = 150;
	        this.match(dramaParser.REGISTER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vspI() {
	    let localctx = new VspIContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, dramaParser.RULE_vspI);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(dramaParser.VSP);
	        this.state = 153;
	        this.match(dramaParser.CD);
	        this.state = 154;
	        this.match(dramaParser.COMMA);
	        this.state = 155;
	        this.adr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	var_() {
	    let localctx = new VarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, dramaParser.RULE_var);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.label();
	        this.state = 158;
	        this.match(dramaParser.RESGR);
	        this.state = 159;
	        this.match(dramaParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	anr() {
	    let localctx = new AnrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, dramaParser.RULE_anr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.state = 161;
	            this.match(dramaParser.REGISTER);
	            break;
	        case 29:
	        case 43:
	            this.state = 162;
	            this.adr();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	adr() {
	    let localctx = new AdrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, dramaParser.RULE_adr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 165;
	            this.match(dramaParser.ID);
	            break;

	        case 2:
	            this.state = 166;
	            this.match(dramaParser.NUMBER);
	            break;

	        case 3:
	            this.state = 167;
	            this.match(dramaParser.NUMBER);
	            this.state = 168;
	            this.match(dramaParser.LEFT_PAREN);
	            this.state = 174;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 169;
	                this.match(dramaParser.SIGN);
	                this.state = 170;
	                this.match(dramaParser.REGISTER);
	                break;

	            case 2:
	                this.state = 171;
	                this.match(dramaParser.REGISTER);
	                this.state = 172;
	                this.match(dramaParser.SIGN);
	                break;

	            case 3:
	                this.state = 173;
	                this.match(dramaParser.REGISTER);
	                break;

	            }
	            this.state = 176;
	            this.match(dramaParser.RIGHT_PAREN);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, dramaParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(dramaParser.ID);
	        this.state = 180;
	        this.match(dramaParser.COLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

dramaParser.EOF = antlr4.Token.EOF;
dramaParser.COMMENT = 1;
dramaParser.STR = 2;
dramaParser.INSTR_NO_MODE_NO_ARG = 3;
dramaParser.HIA = 4;
dramaParser.BIG = 5;
dramaParser.OPT = 6;
dramaParser.AFT = 7;
dramaParser.DEL = 8;
dramaParser.VER = 9;
dramaParser.MOD = 10;
dramaParser.VSP = 11;
dramaParser.VGL = 12;
dramaParser.BST = 13;
dramaParser.HST = 14;
dramaParser.SBR = 15;
dramaParser.SPR = 16;
dramaParser.DRU = 17;
dramaParser.NWL = 18;
dramaParser.LEZ = 19;
dramaParser.DRS = 20;
dramaParser.KTG = 21;
dramaParser.STP = 22;
dramaParser.EINDPR = 23;
dramaParser.RESGR = 24;
dramaParser.REGISTER = 25;
dramaParser.FULL_MODE = 26;
dramaParser.HALF_MODE = 27;
dramaParser.LIMITED_MODE = 28;
dramaParser.NUMBER = 29;
dramaParser.CD = 30;
dramaParser.NUL = 31;
dramaParser.NNUL = 32;
dramaParser.POS = 33;
dramaParser.NPOS = 34;
dramaParser.NEG = 35;
dramaParser.NNEG = 36;
dramaParser.GEL = 37;
dramaParser.NGEL = 38;
dramaParser.GR = 39;
dramaParser.KLG = 40;
dramaParser.KL = 41;
dramaParser.GRG = 42;
dramaParser.ID = 43;
dramaParser.NEWLINE = 44;
dramaParser.INT = 45;
dramaParser.DOT = 46;
dramaParser.COMMA = 47;
dramaParser.PIPELINE = 48;
dramaParser.UNDERSCORE = 49;
dramaParser.SIGN = 50;
dramaParser.MINUS = 51;
dramaParser.PLUS = 52;
dramaParser.COLON = 53;
dramaParser.LEFT_PAREN = 54;
dramaParser.RIGHT_PAREN = 55;
dramaParser.WS = 56;
dramaParser.OTHER = 57;

dramaParser.RULE_start = 0;
dramaParser.RULE_instr = 1;
dramaParser.RULE_hiaI = 2;
dramaParser.RULE_bigI = 3;
dramaParser.RULE_optI = 4;
dramaParser.RULE_aftI = 5;
dramaParser.RULE_delI = 6;
dramaParser.RULE_verI = 7;
dramaParser.RULE_modI = 8;
dramaParser.RULE_vglI = 9;
dramaParser.RULE_sprI = 10;
dramaParser.RULE_sbrI = 11;
dramaParser.RULE_bstI = 12;
dramaParser.RULE_hstI = 13;
dramaParser.RULE_vspI = 14;
dramaParser.RULE_var = 15;
dramaParser.RULE_anr = 16;
dramaParser.RULE_adr = 17;
dramaParser.RULE_label = 18;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_start;
    }

	EOF() {
	    return this.getToken(dramaParser.EOF, 0);
	};

	instr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstrContext);
	    } else {
	        return this.getTypedRuleContext(InstrContext,i);
	    }
	};

	label = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelContext);
	    } else {
	        return this.getTypedRuleContext(LabelContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dramaParser.NEWLINE);
	    } else {
	        return this.getToken(dramaParser.NEWLINE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_instr;
    }

	hiaI() {
	    return this.getTypedRuleContext(HiaIContext,0);
	};

	bigI() {
	    return this.getTypedRuleContext(BigIContext,0);
	};

	optI() {
	    return this.getTypedRuleContext(OptIContext,0);
	};

	aftI() {
	    return this.getTypedRuleContext(AftIContext,0);
	};

	delI() {
	    return this.getTypedRuleContext(DelIContext,0);
	};

	verI() {
	    return this.getTypedRuleContext(VerIContext,0);
	};

	modI() {
	    return this.getTypedRuleContext(ModIContext,0);
	};

	vspI() {
	    return this.getTypedRuleContext(VspIContext,0);
	};

	vglI() {
	    return this.getTypedRuleContext(VglIContext,0);
	};

	sprI() {
	    return this.getTypedRuleContext(SprIContext,0);
	};

	sbrI() {
	    return this.getTypedRuleContext(SbrIContext,0);
	};

	hstI() {
	    return this.getTypedRuleContext(HstIContext,0);
	};

	bstI() {
	    return this.getTypedRuleContext(BstIContext,0);
	};

	INSTR_NO_MODE_NO_ARG() {
	    return this.getToken(dramaParser.INSTR_NO_MODE_NO_ARG, 0);
	};

	var_() {
	    return this.getTypedRuleContext(VarContext,0);
	};

	EINDPR() {
	    return this.getToken(dramaParser.EINDPR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HiaIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_hiaI;
    }

	HIA() {
	    return this.getToken(dramaParser.HIA, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	COMMA() {
	    return this.getToken(dramaParser.COMMA, 0);
	};

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	FULL_MODE() {
	    return this.getToken(dramaParser.FULL_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitHiaI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BigIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_bigI;
    }

	BIG() {
	    return this.getToken(dramaParser.BIG, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	COMMA() {
	    return this.getToken(dramaParser.COMMA, 0);
	};

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	FULL_MODE() {
	    return this.getToken(dramaParser.FULL_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitBigI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OptIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_optI;
    }

	OPT() {
	    return this.getToken(dramaParser.OPT, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	COMMA() {
	    return this.getToken(dramaParser.COMMA, 0);
	};

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	FULL_MODE() {
	    return this.getToken(dramaParser.FULL_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitOptI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AftIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_aftI;
    }

	AFT() {
	    return this.getToken(dramaParser.AFT, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	COMMA() {
	    return this.getToken(dramaParser.COMMA, 0);
	};

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	FULL_MODE() {
	    return this.getToken(dramaParser.FULL_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitAftI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DelIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_delI;
    }

	DEL() {
	    return this.getToken(dramaParser.DEL, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	COMMA() {
	    return this.getToken(dramaParser.COMMA, 0);
	};

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	FULL_MODE() {
	    return this.getToken(dramaParser.FULL_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitDelI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VerIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_verI;
    }

	VER() {
	    return this.getToken(dramaParser.VER, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	COMMA() {
	    return this.getToken(dramaParser.COMMA, 0);
	};

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	FULL_MODE() {
	    return this.getToken(dramaParser.FULL_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitVerI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ModIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_modI;
    }

	MOD() {
	    return this.getToken(dramaParser.MOD, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	COMMA() {
	    return this.getToken(dramaParser.COMMA, 0);
	};

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	FULL_MODE() {
	    return this.getToken(dramaParser.FULL_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitModI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VglIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_vglI;
    }

	VGL() {
	    return this.getToken(dramaParser.VGL, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	COMMA() {
	    return this.getToken(dramaParser.COMMA, 0);
	};

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	FULL_MODE() {
	    return this.getToken(dramaParser.FULL_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitVglI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SprIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_sprI;
    }

	SPR() {
	    return this.getToken(dramaParser.SPR, 0);
	};

	adr() {
	    return this.getTypedRuleContext(AdrContext,0);
	};

	LIMITED_MODE() {
	    return this.getToken(dramaParser.LIMITED_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitSprI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SbrIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_sbrI;
    }

	SBR() {
	    return this.getToken(dramaParser.SBR, 0);
	};

	adr() {
	    return this.getTypedRuleContext(AdrContext,0);
	};

	LIMITED_MODE() {
	    return this.getToken(dramaParser.LIMITED_MODE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitSbrI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BstIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_bstI;
    }

	BST() {
	    return this.getToken(dramaParser.BST, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitBstI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HstIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_hstI;
    }

	HST() {
	    return this.getToken(dramaParser.HST, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitHstI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VspIContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_vspI;
    }

	VSP() {
	    return this.getToken(dramaParser.VSP, 0);
	};

	CD() {
	    return this.getToken(dramaParser.CD, 0);
	};

	COMMA() {
	    return this.getToken(dramaParser.COMMA, 0);
	};

	adr() {
	    return this.getTypedRuleContext(AdrContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitVspI(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_var;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	RESGR() {
	    return this.getToken(dramaParser.RESGR, 0);
	};

	NUMBER() {
	    return this.getToken(dramaParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_anr;
    }

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	adr() {
	    return this.getTypedRuleContext(AdrContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitAnr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_adr;
    }

	ID() {
	    return this.getToken(dramaParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(dramaParser.NUMBER, 0);
	};

	LEFT_PAREN() {
	    return this.getToken(dramaParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(dramaParser.RIGHT_PAREN, 0);
	};

	SIGN() {
	    return this.getToken(dramaParser.SIGN, 0);
	};

	REGISTER() {
	    return this.getToken(dramaParser.REGISTER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitAdr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dramaParser.RULE_label;
    }

	ID() {
	    return this.getToken(dramaParser.ID, 0);
	};

	COLON() {
	    return this.getToken(dramaParser.COLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitLabel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




dramaParser.StartContext = StartContext; 
dramaParser.InstrContext = InstrContext; 
dramaParser.HiaIContext = HiaIContext; 
dramaParser.BigIContext = BigIContext; 
dramaParser.OptIContext = OptIContext; 
dramaParser.AftIContext = AftIContext; 
dramaParser.DelIContext = DelIContext; 
dramaParser.VerIContext = VerIContext; 
dramaParser.ModIContext = ModIContext; 
dramaParser.VglIContext = VglIContext; 
dramaParser.SprIContext = SprIContext; 
dramaParser.SbrIContext = SbrIContext; 
dramaParser.BstIContext = BstIContext; 
dramaParser.HstIContext = HstIContext; 
dramaParser.VspIContext = VspIContext; 
dramaParser.VarContext = VarContext; 
dramaParser.AnrContext = AnrContext; 
dramaParser.AdrContext = AdrContext; 
dramaParser.LabelContext = LabelContext; 
