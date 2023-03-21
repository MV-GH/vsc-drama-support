// Generated from definitions/drama.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import dramaVisitor from './dramaVisitor.js';

const serializedATN = [4,1,56,105,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,3,0,36,8,0,1,0,3,0,39,8,0,
1,0,1,0,1,1,3,1,44,8,1,1,1,3,1,47,8,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,3,2,56,
8,2,1,3,1,3,3,3,60,8,3,1,4,1,4,1,5,1,5,1,5,3,5,67,8,5,1,6,1,6,3,6,71,8,6,
1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,3,11,86,8,11,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,97,8,12,1,12,3,12,100,8,12,
1,13,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,0,107,
0,31,1,0,0,0,2,43,1,0,0,0,4,55,1,0,0,0,6,57,1,0,0,0,8,61,1,0,0,0,10,66,1,
0,0,0,12,70,1,0,0,0,14,75,1,0,0,0,16,77,1,0,0,0,18,79,1,0,0,0,20,81,1,0,
0,0,22,85,1,0,0,0,24,99,1,0,0,0,26,101,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,
0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,
34,36,3,26,13,0,35,34,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,39,3,4,2,0,
38,37,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,0,0,1,41,1,1,0,0,0,42,
44,3,26,13,0,43,42,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,47,3,4,2,0,46,
45,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,5,44,0,0,49,3,1,0,0,0,50,51,
5,3,0,0,51,56,3,10,5,0,52,56,3,6,3,0,53,56,3,8,4,0,54,56,5,26,0,0,55,50,
1,0,0,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,5,1,0,0,0,57,59,5,27,
0,0,58,60,5,29,0,0,59,58,1,0,0,0,59,60,1,0,0,0,60,7,1,0,0,0,61,62,5,2,0,
0,62,9,1,0,0,0,63,67,3,12,6,0,64,67,3,14,7,0,65,67,3,16,8,0,66,63,1,0,0,
0,66,64,1,0,0,0,66,65,1,0,0,0,67,11,1,0,0,0,68,71,3,18,9,0,69,71,3,20,10,
0,70,68,1,0,0,0,70,69,1,0,0,0,71,72,1,0,0,0,72,73,5,47,0,0,73,74,3,22,11,
0,74,13,1,0,0,0,75,76,3,22,11,0,76,15,1,0,0,0,77,78,1,0,0,0,78,17,1,0,0,
0,79,80,5,28,0,0,80,19,1,0,0,0,81,82,5,30,0,0,82,21,1,0,0,0,83,86,5,28,0,
0,84,86,3,24,12,0,85,83,1,0,0,0,85,84,1,0,0,0,86,23,1,0,0,0,87,100,5,43,
0,0,88,100,5,29,0,0,89,90,5,29,0,0,90,96,5,54,0,0,91,92,5,50,0,0,92,97,5,
28,0,0,93,94,5,28,0,0,94,97,5,50,0,0,95,97,5,28,0,0,96,91,1,0,0,0,96,93,
1,0,0,0,96,95,1,0,0,0,97,98,1,0,0,0,98,100,5,55,0,0,99,87,1,0,0,0,99,88,
1,0,0,0,99,89,1,0,0,0,100,25,1,0,0,0,101,102,5,43,0,0,102,103,5,53,0,0,103,
27,1,0,0,0,12,31,35,38,43,46,55,59,66,70,85,96,99];


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
                            "'RESGR'", null, null, null, "'NUL'", "'NNUL'", 
                            "'POS'", "'NPOS'", "'NEG'", "'NNEG'", "'GEL'", 
                            "'NGEL'", "'GR'", "'KLG'", "'KL'", "'GRG'", 
                            null, null, null, "'.'", "','", "'|'", "'_'", 
                            null, "'-'", "'+'", "':'", "'('", "')'" ];
    static symbolicNames = [ null, "COMMENT", "STR", "INSTR_MODE", "MODE", 
                             "WS", "HIA", "BIG", "OPT", "AFT", "DEL", "VER", 
                             "MOD", "VSP", "VGL", "BST", "HST", "SBR", "SPR", 
                             "DRU", "NWL", "LEZ", "DRS", "KTG", "STP", "INSTR", 
                             "EINDPR", "RESGR", "REGISTER", "NUMBER", "CD", 
                             "NUL", "NNUL", "POS", "NPOS", "NEG", "NNEG", 
                             "GEL", "NGEL", "GR", "KLG", "KL", "GRG", "ID", 
                             "EOL", "INT", "DOT", "COMMA", "PIPELINE", "UNDERSCORE", 
                             "SIGN", "MINUS", "PLUS", "COLON", "LP", "RP", 
                             "OTHER" ];
    static ruleNames = [ "start", "line", "instr", "var", "str", "arguments", 
                         "double_arg", "single_arg", "no_arg", "reg", "cd", 
                         "anr", "adr", "label" ];

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
	        this.state = 31;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 28;
	                this.line(); 
	            }
	            this.state = 33;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 34;
	            this.label();
	        }

	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 201326604) !== 0)) {
	            this.state = 37;
	            this.instr();
	        }

	        this.state = 40;
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
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 42;
	            this.label();
	        }

	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 201326604) !== 0)) {
	            this.state = 45;
	            this.instr();
	        }

	        this.state = 48;
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
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(drama.INSTR_MODE);
	            this.state = 51;
	            this.arguments();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.var_();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.str();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 54;
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
	        this.state = 57;
	        this.match(drama.RESGR);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 58;
	            this.match(drama.NUMBER);
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
	        this.state = 61;
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
	        this.state = 66;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.double_arg();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.single_arg();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
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
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.state = 68;
	            this.reg();
	            break;
	        case 30:
	            this.state = 69;
	            this.cd();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 72;
	        this.match(drama.COMMA);
	        this.state = 73;
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
	        this.state = 75;
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
	        this.state = 79;
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
	        this.state = 81;
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



	anr() {
	    let localctx = new AnrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, drama.RULE_anr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.state = 83;
	            this.match(drama.REGISTER);
	            break;
	        case 29:
	        case 43:
	            this.state = 84;
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
	    this.enterRule(localctx, 24, drama.RULE_adr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 87;
	            this.match(drama.ID);
	            break;

	        case 2:
	            this.state = 88;
	            this.match(drama.NUMBER);
	            break;

	        case 3:
	            this.state = 89;
	            this.match(drama.NUMBER);
	            this.state = 90;
	            this.match(drama.LP);
	            this.state = 96;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 91;
	                this.match(drama.SIGN);
	                this.state = 92;
	                this.match(drama.REGISTER);
	                break;

	            case 2:
	                this.state = 93;
	                this.match(drama.REGISTER);
	                this.state = 94;
	                this.match(drama.SIGN);
	                break;

	            case 3:
	                this.state = 95;
	                this.match(drama.REGISTER);
	                break;

	            }
	            this.state = 98;
	            this.match(drama.RP);
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
	    this.enterRule(localctx, 26, drama.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(drama.ID);
	        this.state = 102;
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
drama.NUMBER = 29;
drama.CD = 30;
drama.NUL = 31;
drama.NNUL = 32;
drama.POS = 33;
drama.NPOS = 34;
drama.NEG = 35;
drama.NNEG = 36;
drama.GEL = 37;
drama.NGEL = 38;
drama.GR = 39;
drama.KLG = 40;
drama.KL = 41;
drama.GRG = 42;
drama.ID = 43;
drama.EOL = 44;
drama.INT = 45;
drama.DOT = 46;
drama.COMMA = 47;
drama.PIPELINE = 48;
drama.UNDERSCORE = 49;
drama.SIGN = 50;
drama.MINUS = 51;
drama.PLUS = 52;
drama.COLON = 53;
drama.LP = 54;
drama.RP = 55;
drama.OTHER = 56;

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
drama.RULE_anr = 11;
drama.RULE_adr = 12;
drama.RULE_label = 13;

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

	NUMBER() {
	    return this.getToken(drama.NUMBER, 0);
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

	NUMBER() {
	    return this.getToken(drama.NUMBER, 0);
	};

	LP() {
	    return this.getToken(drama.LP, 0);
	};

	RP() {
	    return this.getToken(drama.RP, 0);
	};

	SIGN() {
	    return this.getToken(drama.SIGN, 0);
	};

	REGISTER() {
	    return this.getToken(drama.REGISTER, 0);
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
drama.AnrContext = AnrContext; 
drama.AdrContext = AdrContext; 
drama.LabelContext = LabelContext; 
