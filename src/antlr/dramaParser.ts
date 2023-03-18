// Generated from definitions/drama.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import dramaVisitor from "./dramaVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class dramaParser extends Parser {
	public static readonly COMMENT = 1;
	public static readonly STR = 2;
	public static readonly INSTR_NO_MODE_NO_ARG = 3;
	public static readonly HIA = 4;
	public static readonly BIG = 5;
	public static readonly OPT = 6;
	public static readonly AFT = 7;
	public static readonly DEL = 8;
	public static readonly VER = 9;
	public static readonly MOD = 10;
	public static readonly VSP = 11;
	public static readonly VGL = 12;
	public static readonly BST = 13;
	public static readonly HST = 14;
	public static readonly SBR = 15;
	public static readonly SPR = 16;
	public static readonly DRU = 17;
	public static readonly NWL = 18;
	public static readonly LEZ = 19;
	public static readonly DRS = 20;
	public static readonly KTG = 21;
	public static readonly STP = 22;
	public static readonly EINDPR = 23;
	public static readonly RESGR = 24;
	public static readonly REGISTER = 25;
	public static readonly FULL_MODE = 26;
	public static readonly HALF_MODE = 27;
	public static readonly LIMITED_MODE = 28;
	public static readonly NUMBER = 29;
	public static readonly CD = 30;
	public static readonly NUL = 31;
	public static readonly NNUL = 32;
	public static readonly POS = 33;
	public static readonly NPOS = 34;
	public static readonly NEG = 35;
	public static readonly NNEG = 36;
	public static readonly GEL = 37;
	public static readonly NGEL = 38;
	public static readonly GR = 39;
	public static readonly KLG = 40;
	public static readonly KL = 41;
	public static readonly GRG = 42;
	public static readonly ID = 43;
	public static readonly NEWLINE = 44;
	public static readonly INT = 45;
	public static readonly DOT = 46;
	public static readonly COMMA = 47;
	public static readonly PIPELINE = 48;
	public static readonly UNDERSCORE = 49;
	public static readonly SIGN = 50;
	public static readonly MINUS = 51;
	public static readonly PLUS = 52;
	public static readonly COLON = 53;
	public static readonly LEFT_PAREN = 54;
	public static readonly RIGHT_PAREN = 55;
	public static readonly WS = 56;
	public static readonly OTHER = 57;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_start = 0;
	public static readonly RULE_instr = 1;
	public static readonly RULE_hiaI = 2;
	public static readonly RULE_bigI = 3;
	public static readonly RULE_optI = 4;
	public static readonly RULE_aftI = 5;
	public static readonly RULE_delI = 6;
	public static readonly RULE_verI = 7;
	public static readonly RULE_modI = 8;
	public static readonly RULE_vglI = 9;
	public static readonly RULE_sprI = 10;
	public static readonly RULE_sbrI = 11;
	public static readonly RULE_bstI = 12;
	public static readonly RULE_hstI = 13;
	public static readonly RULE_vspI = 14;
	public static readonly RULE_var = 15;
	public static readonly RULE_anr = 16;
	public static readonly RULE_adr = 17;
	public static readonly RULE_label = 18;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'HIA'", "'BIG'", 
                                                            "'OPT'", "'AFT'", 
                                                            "'DEL'", "'VER'", 
                                                            "'MOD'", "'VSP'", 
                                                            "'VGL'", "'BST'", 
                                                            "'HST'", "'SBR'", 
                                                            "'SPR'", "'DRU'", 
                                                            "'NWL'", "'LEZ'", 
                                                            "'DRS'", "'KTG'", 
                                                            "'STP'", "'EINDPR'", 
                                                            "'RESGR'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'NUL'", 
                                                            "'NNUL'", "'POS'", 
                                                            "'NPOS'", "'NEG'", 
                                                            "'NNEG'", "'GEL'", 
                                                            "'NGEL'", "'GR'", 
                                                            "'KLG'", "'KL'", 
                                                            "'GRG'", null, 
                                                            null, null, 
                                                            "'.'", "','", 
                                                            "'|'", "'_'", 
                                                            null, "'-'", 
                                                            "'+'", "':'", 
                                                            "'('", "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "COMMENT", 
                                                             "STR", "INSTR_NO_MODE_NO_ARG", 
                                                             "HIA", "BIG", 
                                                             "OPT", "AFT", 
                                                             "DEL", "VER", 
                                                             "MOD", "VSP", 
                                                             "VGL", "BST", 
                                                             "HST", "SBR", 
                                                             "SPR", "DRU", 
                                                             "NWL", "LEZ", 
                                                             "DRS", "KTG", 
                                                             "STP", "EINDPR", 
                                                             "RESGR", "REGISTER", 
                                                             "FULL_MODE", 
                                                             "HALF_MODE", 
                                                             "LIMITED_MODE", 
                                                             "NUMBER", "CD", 
                                                             "NUL", "NNUL", 
                                                             "POS", "NPOS", 
                                                             "NEG", "NNEG", 
                                                             "GEL", "NGEL", 
                                                             "GR", "KLG", 
                                                             "KL", "GRG", 
                                                             "ID", "NEWLINE", 
                                                             "INT", "DOT", 
                                                             "COMMA", "PIPELINE", 
                                                             "UNDERSCORE", 
                                                             "SIGN", "MINUS", 
                                                             "PLUS", "COLON", 
                                                             "LEFT_PAREN", 
                                                             "RIGHT_PAREN", 
                                                             "WS", "OTHER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "instr", "hiaI", "bigI", "optI", "aftI", "delI", "verI", "modI", 
		"vglI", "sprI", "sbrI", "bstI", "hstI", "vspI", "var", "anr", "adr", "label",
	];
	public get grammarFileName(): string { return "drama.g4"; }
	public get literalNames(): (string | null)[] { return dramaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return dramaParser.symbolicNames; }
	public get ruleNames(): string[] { return dramaParser.ruleNames; }
	public get serializedATN(): number[] { return dramaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, dramaParser._ATN, dramaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let localctx: StartContext = new StartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, dramaParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8519672) !== 0) || _la===43) {
				{
				{
				this.state = 39;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 38;
					this.label();
					}
					break;
				}
				this.state = 41;
				this.instr();
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===44) {
					{
					this.state = 42;
					this.match(dramaParser.NEWLINE);
					}
				}

				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this.match(dramaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public instr(): InstrContext {
		let localctx: InstrContext = new InstrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, dramaParser.RULE_instr);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 52;
				this.hiaI();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 53;
				this.bigI();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 54;
				this.optI();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 55;
				this.aftI();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 56;
				this.delI();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 57;
				this.verI();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 58;
				this.modI();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 59;
				this.vspI();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 60;
				this.vglI();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 61;
				this.sprI();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 62;
				this.sbrI();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 63;
				this.hstI();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 64;
				this.bstI();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 65;
				this.match(dramaParser.INSTR_NO_MODE_NO_ARG);
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 66;
				this.var_();
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 67;
				this.match(dramaParser.EINDPR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hiaI(): HiaIContext {
		let localctx: HiaIContext = new HiaIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, dramaParser.RULE_hiaI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			this.match(dramaParser.HIA);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 71;
				this.match(dramaParser.FULL_MODE);
				}
			}

			this.state = 74;
			this.match(dramaParser.REGISTER);
			this.state = 75;
			this.match(dramaParser.COMMA);
			this.state = 76;
			this.anr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bigI(): BigIContext {
		let localctx: BigIContext = new BigIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, dramaParser.RULE_bigI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this.match(dramaParser.BIG);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 79;
				this.match(dramaParser.FULL_MODE);
				}
			}

			this.state = 82;
			this.match(dramaParser.REGISTER);
			this.state = 83;
			this.match(dramaParser.COMMA);
			this.state = 84;
			this.anr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public optI(): OptIContext {
		let localctx: OptIContext = new OptIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, dramaParser.RULE_optI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this.match(dramaParser.OPT);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 87;
				this.match(dramaParser.FULL_MODE);
				}
			}

			this.state = 90;
			this.match(dramaParser.REGISTER);
			this.state = 91;
			this.match(dramaParser.COMMA);
			this.state = 92;
			this.anr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aftI(): AftIContext {
		let localctx: AftIContext = new AftIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, dramaParser.RULE_aftI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 94;
			this.match(dramaParser.AFT);
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 95;
				this.match(dramaParser.FULL_MODE);
				}
			}

			this.state = 98;
			this.match(dramaParser.REGISTER);
			this.state = 99;
			this.match(dramaParser.COMMA);
			this.state = 100;
			this.anr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public delI(): DelIContext {
		let localctx: DelIContext = new DelIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, dramaParser.RULE_delI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 102;
			this.match(dramaParser.DEL);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 103;
				this.match(dramaParser.FULL_MODE);
				}
			}

			this.state = 106;
			this.match(dramaParser.REGISTER);
			this.state = 107;
			this.match(dramaParser.COMMA);
			this.state = 108;
			this.anr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public verI(): VerIContext {
		let localctx: VerIContext = new VerIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, dramaParser.RULE_verI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this.match(dramaParser.VER);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 111;
				this.match(dramaParser.FULL_MODE);
				}
			}

			this.state = 114;
			this.match(dramaParser.REGISTER);
			this.state = 115;
			this.match(dramaParser.COMMA);
			this.state = 116;
			this.anr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modI(): ModIContext {
		let localctx: ModIContext = new ModIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, dramaParser.RULE_modI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this.match(dramaParser.MOD);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 119;
				this.match(dramaParser.FULL_MODE);
				}
			}

			this.state = 122;
			this.match(dramaParser.REGISTER);
			this.state = 123;
			this.match(dramaParser.COMMA);
			this.state = 124;
			this.anr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public vglI(): VglIContext {
		let localctx: VglIContext = new VglIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, dramaParser.RULE_vglI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(dramaParser.VGL);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 127;
				this.match(dramaParser.FULL_MODE);
				}
			}

			this.state = 130;
			this.match(dramaParser.REGISTER);
			this.state = 131;
			this.match(dramaParser.COMMA);
			this.state = 132;
			this.anr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sprI(): SprIContext {
		let localctx: SprIContext = new SprIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, dramaParser.RULE_sprI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 134;
			this.match(dramaParser.SPR);
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 135;
				this.match(dramaParser.LIMITED_MODE);
				}
			}

			this.state = 138;
			this.adr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sbrI(): SbrIContext {
		let localctx: SbrIContext = new SbrIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, dramaParser.RULE_sbrI);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
			this.match(dramaParser.SBR);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 141;
				this.match(dramaParser.LIMITED_MODE);
				}
			}

			this.state = 144;
			this.adr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bstI(): BstIContext {
		let localctx: BstIContext = new BstIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, dramaParser.RULE_bstI);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 146;
			this.match(dramaParser.BST);
			this.state = 147;
			this.match(dramaParser.REGISTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hstI(): HstIContext {
		let localctx: HstIContext = new HstIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, dramaParser.RULE_hstI);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 149;
			this.match(dramaParser.HST);
			this.state = 150;
			this.match(dramaParser.REGISTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public vspI(): VspIContext {
		let localctx: VspIContext = new VspIContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, dramaParser.RULE_vspI);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 152;
			this.match(dramaParser.VSP);
			this.state = 153;
			this.match(dramaParser.CD);
			this.state = 154;
			this.match(dramaParser.COMMA);
			this.state = 155;
			this.adr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_(): VarContext {
		let localctx: VarContext = new VarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, dramaParser.RULE_var);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 157;
			this.label();
			this.state = 158;
			this.match(dramaParser.RESGR);
			this.state = 159;
			this.match(dramaParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anr(): AnrContext {
		let localctx: AnrContext = new AnrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, dramaParser.RULE_anr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				{
				this.state = 161;
				this.match(dramaParser.REGISTER);
				}
				break;
			case 29:
			case 43:
				{
				this.state = 162;
				this.adr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public adr(): AdrContext {
		let localctx: AdrContext = new AdrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, dramaParser.RULE_adr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 165;
				this.match(dramaParser.ID);
				}
				break;
			case 2:
				{
				this.state = 166;
				this.match(dramaParser.NUMBER);
				}
				break;
			case 3:
				{
				this.state = 167;
				this.match(dramaParser.NUMBER);
				this.state = 168;
				this.match(dramaParser.LEFT_PAREN);
				this.state = 174;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					{
					this.state = 169;
					this.match(dramaParser.SIGN);
					this.state = 170;
					this.match(dramaParser.REGISTER);
					}
					}
					break;
				case 2:
					{
					{
					this.state = 171;
					this.match(dramaParser.REGISTER);
					this.state = 172;
					this.match(dramaParser.SIGN);
					}
					}
					break;
				case 3:
					{
					{
					this.state = 173;
					this.match(dramaParser.REGISTER);
					}
					}
					break;
				}
				this.state = 176;
				this.match(dramaParser.RIGHT_PAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let localctx: LabelContext = new LabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, dramaParser.RULE_label);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			this.match(dramaParser.ID);
			this.state = 180;
			this.match(dramaParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,57,183,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,1,0,3,0,40,8,0,1,0,1,0,3,0,44,8,0,5,0,46,8,0,10,0,12,0,49,
	9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,3,1,69,8,1,1,2,1,2,3,2,73,8,2,1,2,1,2,1,2,1,2,1,3,1,3,3,3,81,8,3,1,
	3,1,3,1,3,1,3,1,4,1,4,3,4,89,8,4,1,4,1,4,1,4,1,4,1,5,1,5,3,5,97,8,5,1,5,
	1,5,1,5,1,5,1,6,1,6,3,6,105,8,6,1,6,1,6,1,6,1,6,1,7,1,7,3,7,113,8,7,1,7,
	1,7,1,7,1,7,1,8,1,8,3,8,121,8,8,1,8,1,8,1,8,1,8,1,9,1,9,3,9,129,8,9,1,9,
	1,9,1,9,1,9,1,10,1,10,3,10,137,8,10,1,10,1,10,1,11,1,11,3,11,143,8,11,1,
	11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,
	1,15,1,15,1,16,1,16,3,16,164,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
	17,1,17,3,17,175,8,17,1,17,3,17,178,8,17,1,18,1,18,1,18,1,18,0,0,19,0,2,
	4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,0,196,0,47,1,0,0,0,2,
	68,1,0,0,0,4,70,1,0,0,0,6,78,1,0,0,0,8,86,1,0,0,0,10,94,1,0,0,0,12,102,
	1,0,0,0,14,110,1,0,0,0,16,118,1,0,0,0,18,126,1,0,0,0,20,134,1,0,0,0,22,
	140,1,0,0,0,24,146,1,0,0,0,26,149,1,0,0,0,28,152,1,0,0,0,30,157,1,0,0,0,
	32,163,1,0,0,0,34,177,1,0,0,0,36,179,1,0,0,0,38,40,3,36,18,0,39,38,1,0,
	0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,43,3,2,1,0,42,44,5,44,0,0,43,42,1,0,
	0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,39,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,
	0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,0,0,1,51,1,1,0,0,0,
	52,69,3,4,2,0,53,69,3,6,3,0,54,69,3,8,4,0,55,69,3,10,5,0,56,69,3,12,6,0,
	57,69,3,14,7,0,58,69,3,16,8,0,59,69,3,28,14,0,60,69,3,18,9,0,61,69,3,20,
	10,0,62,69,3,22,11,0,63,69,3,26,13,0,64,69,3,24,12,0,65,69,5,3,0,0,66,69,
	3,30,15,0,67,69,5,23,0,0,68,52,1,0,0,0,68,53,1,0,0,0,68,54,1,0,0,0,68,55,
	1,0,0,0,68,56,1,0,0,0,68,57,1,0,0,0,68,58,1,0,0,0,68,59,1,0,0,0,68,60,1,
	0,0,0,68,61,1,0,0,0,68,62,1,0,0,0,68,63,1,0,0,0,68,64,1,0,0,0,68,65,1,0,
	0,0,68,66,1,0,0,0,68,67,1,0,0,0,69,3,1,0,0,0,70,72,5,4,0,0,71,73,5,26,0,
	0,72,71,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,75,5,25,0,0,75,76,5,47,0,
	0,76,77,3,32,16,0,77,5,1,0,0,0,78,80,5,5,0,0,79,81,5,26,0,0,80,79,1,0,0,
	0,80,81,1,0,0,0,81,82,1,0,0,0,82,83,5,25,0,0,83,84,5,47,0,0,84,85,3,32,
	16,0,85,7,1,0,0,0,86,88,5,6,0,0,87,89,5,26,0,0,88,87,1,0,0,0,88,89,1,0,
	0,0,89,90,1,0,0,0,90,91,5,25,0,0,91,92,5,47,0,0,92,93,3,32,16,0,93,9,1,
	0,0,0,94,96,5,7,0,0,95,97,5,26,0,0,96,95,1,0,0,0,96,97,1,0,0,0,97,98,1,
	0,0,0,98,99,5,25,0,0,99,100,5,47,0,0,100,101,3,32,16,0,101,11,1,0,0,0,102,
	104,5,8,0,0,103,105,5,26,0,0,104,103,1,0,0,0,104,105,1,0,0,0,105,106,1,
	0,0,0,106,107,5,25,0,0,107,108,5,47,0,0,108,109,3,32,16,0,109,13,1,0,0,
	0,110,112,5,9,0,0,111,113,5,26,0,0,112,111,1,0,0,0,112,113,1,0,0,0,113,
	114,1,0,0,0,114,115,5,25,0,0,115,116,5,47,0,0,116,117,3,32,16,0,117,15,
	1,0,0,0,118,120,5,10,0,0,119,121,5,26,0,0,120,119,1,0,0,0,120,121,1,0,0,
	0,121,122,1,0,0,0,122,123,5,25,0,0,123,124,5,47,0,0,124,125,3,32,16,0,125,
	17,1,0,0,0,126,128,5,12,0,0,127,129,5,26,0,0,128,127,1,0,0,0,128,129,1,
	0,0,0,129,130,1,0,0,0,130,131,5,25,0,0,131,132,5,47,0,0,132,133,3,32,16,
	0,133,19,1,0,0,0,134,136,5,16,0,0,135,137,5,28,0,0,136,135,1,0,0,0,136,
	137,1,0,0,0,137,138,1,0,0,0,138,139,3,34,17,0,139,21,1,0,0,0,140,142,5,
	15,0,0,141,143,5,28,0,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,
	144,145,3,34,17,0,145,23,1,0,0,0,146,147,5,13,0,0,147,148,5,25,0,0,148,
	25,1,0,0,0,149,150,5,14,0,0,150,151,5,25,0,0,151,27,1,0,0,0,152,153,5,11,
	0,0,153,154,5,30,0,0,154,155,5,47,0,0,155,156,3,34,17,0,156,29,1,0,0,0,
	157,158,3,36,18,0,158,159,5,24,0,0,159,160,5,29,0,0,160,31,1,0,0,0,161,
	164,5,25,0,0,162,164,3,34,17,0,163,161,1,0,0,0,163,162,1,0,0,0,164,33,1,
	0,0,0,165,178,5,43,0,0,166,178,5,29,0,0,167,168,5,29,0,0,168,174,5,54,0,
	0,169,170,5,50,0,0,170,175,5,25,0,0,171,172,5,25,0,0,172,175,5,50,0,0,173,
	175,5,25,0,0,174,169,1,0,0,0,174,171,1,0,0,0,174,173,1,0,0,0,175,176,1,
	0,0,0,176,178,5,55,0,0,177,165,1,0,0,0,177,166,1,0,0,0,177,167,1,0,0,0,
	178,35,1,0,0,0,179,180,5,43,0,0,180,181,5,53,0,0,181,37,1,0,0,0,17,39,43,
	47,68,72,80,88,96,104,112,120,128,136,142,163,174,177];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!dramaParser.__ATN) {
			dramaParser.__ATN = new ATNDeserializer().deserialize(dramaParser._serializedATN);
		}

		return dramaParser.__ATN;
	}


	static DecisionsToDFA = dramaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StartContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(dramaParser.EOF, 0);
	}
	public instr_list(): InstrContext[] {
		return this.getTypedRuleContexts(InstrContext) as InstrContext[];
	}
	public instr(i: number): InstrContext {
		return this.getTypedRuleContext(InstrContext, i) as InstrContext;
	}
	public label_list(): LabelContext[] {
		return this.getTypedRuleContexts(LabelContext) as LabelContext[];
	}
	public label(i: number): LabelContext {
		return this.getTypedRuleContext(LabelContext, i) as LabelContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(dramaParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(dramaParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_start;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstrContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public hiaI(): HiaIContext {
		return this.getTypedRuleContext(HiaIContext, 0) as HiaIContext;
	}
	public bigI(): BigIContext {
		return this.getTypedRuleContext(BigIContext, 0) as BigIContext;
	}
	public optI(): OptIContext {
		return this.getTypedRuleContext(OptIContext, 0) as OptIContext;
	}
	public aftI(): AftIContext {
		return this.getTypedRuleContext(AftIContext, 0) as AftIContext;
	}
	public delI(): DelIContext {
		return this.getTypedRuleContext(DelIContext, 0) as DelIContext;
	}
	public verI(): VerIContext {
		return this.getTypedRuleContext(VerIContext, 0) as VerIContext;
	}
	public modI(): ModIContext {
		return this.getTypedRuleContext(ModIContext, 0) as ModIContext;
	}
	public vspI(): VspIContext {
		return this.getTypedRuleContext(VspIContext, 0) as VspIContext;
	}
	public vglI(): VglIContext {
		return this.getTypedRuleContext(VglIContext, 0) as VglIContext;
	}
	public sprI(): SprIContext {
		return this.getTypedRuleContext(SprIContext, 0) as SprIContext;
	}
	public sbrI(): SbrIContext {
		return this.getTypedRuleContext(SbrIContext, 0) as SbrIContext;
	}
	public hstI(): HstIContext {
		return this.getTypedRuleContext(HstIContext, 0) as HstIContext;
	}
	public bstI(): BstIContext {
		return this.getTypedRuleContext(BstIContext, 0) as BstIContext;
	}
	public INSTR_NO_MODE_NO_ARG(): TerminalNode {
		return this.getToken(dramaParser.INSTR_NO_MODE_NO_ARG, 0);
	}
	public var_(): VarContext {
		return this.getTypedRuleContext(VarContext, 0) as VarContext;
	}
	public EINDPR(): TerminalNode {
		return this.getToken(dramaParser.EINDPR, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_instr;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitInstr) {
			return visitor.visitInstr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HiaIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HIA(): TerminalNode {
		return this.getToken(dramaParser.HIA, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(dramaParser.COMMA, 0);
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
	public FULL_MODE(): TerminalNode {
		return this.getToken(dramaParser.FULL_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_hiaI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitHiaI) {
			return visitor.visitHiaI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BigIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BIG(): TerminalNode {
		return this.getToken(dramaParser.BIG, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(dramaParser.COMMA, 0);
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
	public FULL_MODE(): TerminalNode {
		return this.getToken(dramaParser.FULL_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_bigI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitBigI) {
			return visitor.visitBigI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPT(): TerminalNode {
		return this.getToken(dramaParser.OPT, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(dramaParser.COMMA, 0);
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
	public FULL_MODE(): TerminalNode {
		return this.getToken(dramaParser.FULL_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_optI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitOptI) {
			return visitor.visitOptI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AftIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AFT(): TerminalNode {
		return this.getToken(dramaParser.AFT, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(dramaParser.COMMA, 0);
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
	public FULL_MODE(): TerminalNode {
		return this.getToken(dramaParser.FULL_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_aftI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitAftI) {
			return visitor.visitAftI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEL(): TerminalNode {
		return this.getToken(dramaParser.DEL, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(dramaParser.COMMA, 0);
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
	public FULL_MODE(): TerminalNode {
		return this.getToken(dramaParser.FULL_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_delI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitDelI) {
			return visitor.visitDelI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VerIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VER(): TerminalNode {
		return this.getToken(dramaParser.VER, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(dramaParser.COMMA, 0);
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
	public FULL_MODE(): TerminalNode {
		return this.getToken(dramaParser.FULL_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_verI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitVerI) {
			return visitor.visitVerI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MOD(): TerminalNode {
		return this.getToken(dramaParser.MOD, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(dramaParser.COMMA, 0);
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
	public FULL_MODE(): TerminalNode {
		return this.getToken(dramaParser.FULL_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_modI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitModI) {
			return visitor.visitModI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VglIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VGL(): TerminalNode {
		return this.getToken(dramaParser.VGL, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(dramaParser.COMMA, 0);
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
	public FULL_MODE(): TerminalNode {
		return this.getToken(dramaParser.FULL_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_vglI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitVglI) {
			return visitor.visitVglI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SprIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPR(): TerminalNode {
		return this.getToken(dramaParser.SPR, 0);
	}
	public adr(): AdrContext {
		return this.getTypedRuleContext(AdrContext, 0) as AdrContext;
	}
	public LIMITED_MODE(): TerminalNode {
		return this.getToken(dramaParser.LIMITED_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_sprI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitSprI) {
			return visitor.visitSprI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SbrIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SBR(): TerminalNode {
		return this.getToken(dramaParser.SBR, 0);
	}
	public adr(): AdrContext {
		return this.getTypedRuleContext(AdrContext, 0) as AdrContext;
	}
	public LIMITED_MODE(): TerminalNode {
		return this.getToken(dramaParser.LIMITED_MODE, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_sbrI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitSbrI) {
			return visitor.visitSbrI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BstIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BST(): TerminalNode {
		return this.getToken(dramaParser.BST, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_bstI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitBstI) {
			return visitor.visitBstI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HstIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HST(): TerminalNode {
		return this.getToken(dramaParser.HST, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_hstI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitHstI) {
			return visitor.visitHstI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VspIContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VSP(): TerminalNode {
		return this.getToken(dramaParser.VSP, 0);
	}
	public CD(): TerminalNode {
		return this.getToken(dramaParser.CD, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(dramaParser.COMMA, 0);
	}
	public adr(): AdrContext {
		return this.getTypedRuleContext(AdrContext, 0) as AdrContext;
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_vspI;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitVspI) {
			return visitor.visitVspI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
	public RESGR(): TerminalNode {
		return this.getToken(dramaParser.RESGR, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(dramaParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_var;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnrContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
	public adr(): AdrContext {
		return this.getTypedRuleContext(AdrContext, 0) as AdrContext;
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_anr;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitAnr) {
			return visitor.visitAnr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdrContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(dramaParser.ID, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(dramaParser.NUMBER, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(dramaParser.LEFT_PAREN, 0);
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(dramaParser.RIGHT_PAREN, 0);
	}
	public SIGN(): TerminalNode {
		return this.getToken(dramaParser.SIGN, 0);
	}
	public REGISTER(): TerminalNode {
		return this.getToken(dramaParser.REGISTER, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_adr;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitAdr) {
			return visitor.visitAdr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	constructor(parser?: dramaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(dramaParser.ID, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(dramaParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return dramaParser.RULE_label;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
