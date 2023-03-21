// Generated from definitions/drama.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import dramaVisitor from './dramaVisitor.js';

const serializedATN = [4,1,54,141,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,3,0,40,
8,0,1,0,3,0,43,8,0,1,0,1,0,1,1,3,1,48,8,1,1,1,3,1,51,8,1,1,1,1,1,1,2,1,2,
1,2,1,2,1,2,3,2,60,8,2,1,3,1,3,3,3,64,8,3,1,4,1,4,1,5,1,5,1,5,3,5,71,8,5,
1,6,1,6,3,6,75,8,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,
11,1,12,1,12,3,12,92,8,12,1,13,1,13,3,13,96,8,13,1,13,3,13,99,8,13,1,13,
1,13,3,13,103,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,113,8,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,123,8,13,3,13,125,8,13,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,3,14,134,8,14,1,14,1,14,1,15,1,15,1,15,1,15,
0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,1,1,0,49,50,149,0,35,
1,0,0,0,2,47,1,0,0,0,4,59,1,0,0,0,6,61,1,0,0,0,8,65,1,0,0,0,10,70,1,0,0,
0,12,74,1,0,0,0,14,79,1,0,0,0,16,81,1,0,0,0,18,83,1,0,0,0,20,85,1,0,0,0,
22,87,1,0,0,0,24,91,1,0,0,0,26,124,1,0,0,0,28,126,1,0,0,0,30,137,1,0,0,0,
32,34,3,2,1,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,
39,1,0,0,0,37,35,1,0,0,0,38,40,3,30,15,0,39,38,1,0,0,0,39,40,1,0,0,0,40,
42,1,0,0,0,41,43,3,4,2,0,42,41,1,0,0,0,42,43,1,0,0,0,43,44,1,0,0,0,44,45,
5,0,0,1,45,1,1,0,0,0,46,48,3,30,15,0,47,46,1,0,0,0,47,48,1,0,0,0,48,50,1,
0,0,0,49,51,3,4,2,0,50,49,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,5,43,
0,0,53,3,1,0,0,0,54,55,5,3,0,0,55,60,3,10,5,0,56,60,3,6,3,0,57,60,3,8,4,
0,58,60,5,26,0,0,59,54,1,0,0,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,0,
60,5,1,0,0,0,61,63,5,27,0,0,62,64,5,44,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,
7,1,0,0,0,65,66,5,2,0,0,66,9,1,0,0,0,67,71,3,12,6,0,68,71,3,14,7,0,69,71,
3,16,8,0,70,67,1,0,0,0,70,68,1,0,0,0,70,69,1,0,0,0,71,11,1,0,0,0,72,75,3,
18,9,0,73,75,3,20,10,0,74,72,1,0,0,0,74,73,1,0,0,0,75,76,1,0,0,0,76,77,5,
46,0,0,77,78,3,24,12,0,78,13,1,0,0,0,79,80,3,24,12,0,80,15,1,0,0,0,81,82,
1,0,0,0,82,17,1,0,0,0,83,84,5,28,0,0,84,19,1,0,0,0,85,86,5,29,0,0,86,21,
1,0,0,0,87,88,7,0,0,0,88,23,1,0,0,0,89,92,5,28,0,0,90,92,3,26,13,0,91,89,
1,0,0,0,91,90,1,0,0,0,92,25,1,0,0,0,93,95,5,42,0,0,94,96,3,28,14,0,95,94,
1,0,0,0,95,96,1,0,0,0,96,125,1,0,0,0,97,99,5,49,0,0,98,97,1,0,0,0,98,99,
1,0,0,0,99,100,1,0,0,0,100,102,5,44,0,0,101,103,3,28,14,0,102,101,1,0,0,
0,102,103,1,0,0,0,103,125,1,0,0,0,104,105,5,42,0,0,105,106,3,22,11,0,106,
107,5,44,0,0,107,125,1,0,0,0,108,109,5,42,0,0,109,110,3,22,11,0,110,112,
5,44,0,0,111,113,3,28,14,0,112,111,1,0,0,0,112,113,1,0,0,0,113,125,1,0,0,
0,114,115,5,44,0,0,115,116,3,22,11,0,116,117,5,42,0,0,117,125,1,0,0,0,118,
119,5,44,0,0,119,120,3,22,11,0,120,122,5,42,0,0,121,123,3,28,14,0,122,121,
1,0,0,0,122,123,1,0,0,0,123,125,1,0,0,0,124,93,1,0,0,0,124,98,1,0,0,0,124,
104,1,0,0,0,124,108,1,0,0,0,124,114,1,0,0,0,124,118,1,0,0,0,125,27,1,0,0,
0,126,133,5,52,0,0,127,128,3,22,11,0,128,129,5,28,0,0,129,134,1,0,0,0,130,
131,5,28,0,0,131,134,3,22,11,0,132,134,5,28,0,0,133,127,1,0,0,0,133,130,
1,0,0,0,133,132,1,0,0,0,134,135,1,0,0,0,135,136,5,53,0,0,136,29,1,0,0,0,
137,138,5,42,0,0,138,139,5,51,0,0,139,31,1,0,0,0,17,35,39,42,47,50,59,63,
70,74,91,95,98,102,112,122,124,133];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class drama extends antlr4.Parser {

    static grammarFileName = "drama.g4";
    static literalNames = [ null, null, null, null, null, null, "'HIA'", 
                            "'BIG'", "'OPT'", "'AFT'", "'DEL'", "'VER'", 
                            "'MOD'", "'VSP'", "'VGL'", "'BST'", "'HST'", 
                            "'SBR'", "'SPR'", "'DRU'", "'NWL'", "'LEZ'", 
                            "'DRS'", "'KTG'", "'STP'", null, "'EINDPR'", 
                            "'RESGR'", null, null, "'NUL'", "'NNUL'", "'POS'", 
                            "'NPOS'", "'NEG'", "'NNEG'", "'GEL'", "'NGEL'", 
                            "'GR'", "'KLG'", "'KL'", "'GRG'", null, null, 
                            null, "'.'", "','", "'|'", "'_'", "'-'", "'+'", 
                            "':'", "'('", "')'" ];
    static symbolicNames = [ null, "COMMENT", "STR", "INSTR_MODE", "MODE", 
                             "WS", "HIA", "BIG", "OPT", "AFT", "DEL", "VER", 
                             "MOD", "VSP", "VGL", "BST", "HST", "SBR", "SPR", 
                             "DRU", "NWL", "LEZ", "DRS", "KTG", "STP", "INSTR", 
                             "EINDPR", "RESGR", "REGISTER", "CD", "NUL", 
                             "NNUL", "POS", "NPOS", "NEG", "NNEG", "GEL", 
                             "NGEL", "GR", "KLG", "KL", "GRG", "ID", "EOL", 
                             "INT", "DOT", "COMMA", "PIPELINE", "UNDERSCORE", 
                             "MINUS", "PLUS", "COLON", "LP", "RP", "OTHER" ];
    static ruleNames = [ "start", "line", "instr", "var", "str", "arguments", 
                         "double_arg", "single_arg", "no_arg", "reg", "cd", 
                         "sign", "anr", "adr", "index", "label" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = drama.ruleNames;
        this.literalNames = drama.literalNames;
        this.symbolicNames = drama.symbolicNames;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, drama.RULE_start);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 32;
	                this.line(); 
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 38;
	            this.label();
	        }

	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 201326604) !== 0)) {
	            this.state = 41;
	            this.instr();
	        }

	        this.state = 44;
	        this.match(drama.EOF);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, drama.RULE_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 46;
	            this.label();
	        }

	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 201326604) !== 0)) {
	            this.state = 49;
	            this.instr();
	        }

	        this.state = 52;
	        this.match(drama.EOL);
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
	    this.enterRule(localctx, 4, drama.RULE_instr);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.match(drama.INSTR_MODE);
	            this.state = 55;
	            this.arguments();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.var_();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 57;
	            this.str();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 58;
	            this.match(drama.EINDPR);
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



	var_() {
	    let localctx = new VarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, drama.RULE_var);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(drama.RESGR);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 62;
	            this.match(drama.INT);
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



	str() {
	    let localctx = new StrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, drama.RULE_str);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(drama.STR);
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



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, drama.RULE_arguments);
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.double_arg();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 68;
	            this.single_arg();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 69;
	            this.no_arg();
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



	double_arg() {
	    let localctx = new Double_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, drama.RULE_double_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.state = 72;
	            this.reg();
	            break;
	        case 29:
	            this.state = 73;
	            this.cd();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 76;
	        this.match(drama.COMMA);
	        this.state = 77;
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



	single_arg() {
	    let localctx = new Single_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, drama.RULE_single_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
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



	no_arg() {
	    let localctx = new No_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, drama.RULE_no_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);

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



	reg() {
	    let localctx = new RegContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, drama.RULE_reg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(drama.REGISTER);
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



	cd() {
	    let localctx = new CdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, drama.RULE_cd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(drama.CD);
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



	sign() {
	    let localctx = new SignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, drama.RULE_sign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        _la = this._input.LA(1);
	        if(!(_la===49 || _la===50)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	anr() {
	    let localctx = new AnrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, drama.RULE_anr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.state = 89;
	            this.match(drama.REGISTER);
	            break;
	        case 42:
	        case 44:
	        case 49:
	            this.state = 90;
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
	    this.enterRule(localctx, 26, drama.RULE_adr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 93;
	            this.match(drama.ID);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 94;
	                this.index();
	            }

	            break;

	        case 2:
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===49) {
	                this.state = 97;
	                this.match(drama.MINUS);
	            }

	            this.state = 100;
	            this.match(drama.INT);
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 101;
	                this.index();
	            }

	            break;

	        case 3:
	            this.state = 104;
	            this.match(drama.ID);
	            this.state = 105;
	            this.sign();
	            this.state = 106;
	            this.match(drama.INT);
	            break;

	        case 4:
	            this.state = 108;
	            this.match(drama.ID);
	            this.state = 109;
	            this.sign();
	            this.state = 110;
	            this.match(drama.INT);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 111;
	                this.index();
	            }

	            break;

	        case 5:
	            this.state = 114;
	            this.match(drama.INT);
	            this.state = 115;
	            this.sign();
	            this.state = 116;
	            this.match(drama.ID);
	            break;

	        case 6:
	            this.state = 118;
	            this.match(drama.INT);
	            this.state = 119;
	            this.sign();
	            this.state = 120;
	            this.match(drama.ID);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 121;
	                this.index();
	            }

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



	index() {
	    let localctx = new IndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, drama.RULE_index);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(drama.LP);
	        this.state = 133;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 127;
	            this.sign();
	            this.state = 128;
	            this.match(drama.REGISTER);
	            break;

	        case 2:
	            this.state = 130;
	            this.match(drama.REGISTER);
	            this.state = 131;
	            this.sign();
	            break;

	        case 3:
	            this.state = 132;
	            this.match(drama.REGISTER);
	            break;

	        }
	        this.state = 135;
	        this.match(drama.RP);
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
	    this.enterRule(localctx, 30, drama.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(drama.ID);
	        this.state = 138;
	        this.match(drama.COLON);
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

drama.EOF = antlr4.Token.EOF;
drama.COMMENT = 1;
drama.STR = 2;
drama.INSTR_MODE = 3;
drama.MODE = 4;
drama.WS = 5;
drama.HIA = 6;
drama.BIG = 7;
drama.OPT = 8;
drama.AFT = 9;
drama.DEL = 10;
drama.VER = 11;
drama.MOD = 12;
drama.VSP = 13;
drama.VGL = 14;
drama.BST = 15;
drama.HST = 16;
drama.SBR = 17;
drama.SPR = 18;
drama.DRU = 19;
drama.NWL = 20;
drama.LEZ = 21;
drama.DRS = 22;
drama.KTG = 23;
drama.STP = 24;
drama.INSTR = 25;
drama.EINDPR = 26;
drama.RESGR = 27;
drama.REGISTER = 28;
drama.CD = 29;
drama.NUL = 30;
drama.NNUL = 31;
drama.POS = 32;
drama.NPOS = 33;
drama.NEG = 34;
drama.NNEG = 35;
drama.GEL = 36;
drama.NGEL = 37;
drama.GR = 38;
drama.KLG = 39;
drama.KL = 40;
drama.GRG = 41;
drama.ID = 42;
drama.EOL = 43;
drama.INT = 44;
drama.DOT = 45;
drama.COMMA = 46;
drama.PIPELINE = 47;
drama.UNDERSCORE = 48;
drama.MINUS = 49;
drama.PLUS = 50;
drama.COLON = 51;
drama.LP = 52;
drama.RP = 53;
drama.OTHER = 54;

drama.RULE_start = 0;
drama.RULE_line = 1;
drama.RULE_instr = 2;
drama.RULE_var = 3;
drama.RULE_str = 4;
drama.RULE_arguments = 5;
drama.RULE_double_arg = 6;
drama.RULE_single_arg = 7;
drama.RULE_no_arg = 8;
drama.RULE_reg = 9;
drama.RULE_cd = 10;
drama.RULE_sign = 11;
drama.RULE_anr = 12;
drama.RULE_adr = 13;
drama.RULE_index = 14;
drama.RULE_label = 15;

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
        this.ruleIndex = drama.RULE_start;
    }

	EOF() {
	    return this.getToken(drama.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	instr() {
	    return this.getTypedRuleContext(InstrContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_line;
    }

	EOL() {
	    return this.getToken(drama.EOL, 0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	instr() {
	    return this.getTypedRuleContext(InstrContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitLine(this);
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
        this.ruleIndex = drama.RULE_instr;
    }

	INSTR_MODE() {
	    return this.getToken(drama.INSTR_MODE, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	var_() {
	    return this.getTypedRuleContext(VarContext,0);
	};

	str() {
	    return this.getTypedRuleContext(StrContext,0);
	};

	EINDPR() {
	    return this.getToken(drama.EINDPR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitInstr(this);
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
        this.ruleIndex = drama.RULE_var;
    }

	RESGR() {
	    return this.getToken(drama.RESGR, 0);
	};

	INT() {
	    return this.getToken(drama.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_str;
    }

	STR() {
	    return this.getToken(drama.STR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitStr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_arguments;
    }

	double_arg() {
	    return this.getTypedRuleContext(Double_argContext,0);
	};

	single_arg() {
	    return this.getTypedRuleContext(Single_argContext,0);
	};

	no_arg() {
	    return this.getTypedRuleContext(No_argContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Double_argContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_double_arg;
    }

	COMMA() {
	    return this.getToken(drama.COMMA, 0);
	};

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	reg() {
	    return this.getTypedRuleContext(RegContext,0);
	};

	cd() {
	    return this.getTypedRuleContext(CdContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitDouble_arg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Single_argContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_single_arg;
    }

	anr() {
	    return this.getTypedRuleContext(AnrContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitSingle_arg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class No_argContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_no_arg;
    }


	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitNo_arg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RegContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_reg;
    }

	REGISTER() {
	    return this.getToken(drama.REGISTER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitReg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_cd;
    }

	CD() {
	    return this.getToken(drama.CD, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitCd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_sign;
    }

	PLUS() {
	    return this.getToken(drama.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(drama.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitSign(this);
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
        this.ruleIndex = drama.RULE_anr;
    }

	REGISTER() {
	    return this.getToken(drama.REGISTER, 0);
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
        this.ruleIndex = drama.RULE_adr;
    }

	ID() {
	    return this.getToken(drama.ID, 0);
	};

	INT() {
	    return this.getToken(drama.INT, 0);
	};

	sign() {
	    return this.getTypedRuleContext(SignContext,0);
	};

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	MINUS() {
	    return this.getToken(drama.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitAdr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = drama.RULE_index;
    }

	LP() {
	    return this.getToken(drama.LP, 0);
	};

	RP() {
	    return this.getToken(drama.RP, 0);
	};

	sign() {
	    return this.getTypedRuleContext(SignContext,0);
	};

	REGISTER() {
	    return this.getToken(drama.REGISTER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitIndex(this);
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
        this.ruleIndex = drama.RULE_label;
    }

	ID() {
	    return this.getToken(drama.ID, 0);
	};

	COLON() {
	    return this.getToken(drama.COLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof dramaVisitor ) {
	        return visitor.visitLabel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




drama.StartContext = StartContext; 
drama.LineContext = LineContext; 
drama.InstrContext = InstrContext; 
drama.VarContext = VarContext; 
drama.StrContext = StrContext; 
drama.ArgumentsContext = ArgumentsContext; 
drama.Double_argContext = Double_argContext; 
drama.Single_argContext = Single_argContext; 
drama.No_argContext = No_argContext; 
drama.RegContext = RegContext; 
drama.CdContext = CdContext; 
drama.SignContext = SignContext; 
drama.AnrContext = AnrContext; 
drama.AdrContext = AdrContext; 
drama.IndexContext = IndexContext; 
drama.LabelContext = LabelContext; 
