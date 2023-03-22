//@ts-nocheck
// Generated from grammars/drama.g4 by ANTLR 4.12.0
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


export default class drama extends Parser {
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
	public static readonly LP = 52;
	public static readonly RP = 53;
	public static readonly OTHER = 54;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_start = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_instr = 2;
	public static readonly RULE_var = 3;
	public static readonly RULE_str = 4;
	public static readonly RULE_arguments = 5;
	public static readonly RULE_double_arg = 6;
	public static readonly RULE_single_arg = 7;
	public static readonly RULE_no_arg = 8;
	public static readonly RULE_reg = 9;
	public static readonly RULE_cd = 10;
	public static readonly RULE_sign = 11;
	public static readonly RULE_anr = 12;
	public static readonly RULE_adr = 13;
	public static readonly RULE_index = 14;
	public static readonly RULE_label = 15;
	public static readonly RULE_number = 16;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
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
                                                            "'STP'", null, 
                                                            "'EINDPR'", 
                                                            "'RESGR'", null, 
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
                                                            "'-'", "'+'", 
                                                            "':'", "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "COMMENT", 
                                                             "STR", "INSTR_MODE", 
                                                             "MODE", "WS", 
                                                             "HIA", "BIG", 
                                                             "OPT", "AFT", 
                                                             "DEL", "VER", 
                                                             "MOD", "VSP", 
                                                             "VGL", "BST", 
                                                             "HST", "SBR", 
                                                             "SPR", "DRU", 
                                                             "NWL", "LEZ", 
                                                             "DRS", "KTG", 
                                                             "STP", "INSTR", 
                                                             "EINDPR", "RESGR", 
                                                             "REGISTER", 
                                                             "CD", "NUL", 
                                                             "NNUL", "POS", 
                                                             "NPOS", "NEG", 
                                                             "NNEG", "GEL", 
                                                             "NGEL", "GR", 
                                                             "KLG", "KL", 
                                                             "GRG", "ID", 
                                                             "EOL", "INT", 
                                                             "DOT", "COMMA", 
                                                             "PIPELINE", 
                                                             "UNDERSCORE", 
                                                             "MINUS", "PLUS", 
                                                             "COLON", "LP", 
                                                             "RP", "OTHER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "line", "instr", "var", "str", "arguments", "double_arg", "single_arg", 
		"no_arg", "reg", "cd", "sign", "anr", "adr", "index", "label", "number",
	];
	public get grammarFileName(): string { return "drama.g4"; }
	public get literalNames(): (string | null)[] { return drama.literalNames; }
	public get symbolicNames(): (string | null)[] { return drama.symbolicNames; }
	public get ruleNames(): string[] { return drama.ruleNames; }
	public get serializedATN(): number[] { return drama._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, drama._ATN, drama.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let localctx: StartContext = new StartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, drama.RULE_start);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 34;
					this.line();
					}
					}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 40;
				this.label();
				}
			}

			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201326604) !== 0)) {
				{
				this.state = 43;
				this.instr();
				}
			}

			this.state = 46;
			this.match(drama.EOF);
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
	public line(): LineContext {
		let localctx: LineContext = new LineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, drama.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 48;
				this.label();
				}
			}

			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201326604) !== 0)) {
				{
				this.state = 51;
				this.instr();
				}
			}

			this.state = 54;
			this.match(drama.EOL);
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
	public instr(): InstrContext {
		let localctx: InstrContext = new InstrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, drama.RULE_instr);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 56;
				this.match(drama.INSTR_MODE);
				this.state = 57;
				this.arguments();
				}
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 58;
				this.var_();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 59;
				this.str();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 60;
				this.match(drama.EINDPR);
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
	public var_(): VarContext {
		let localctx: VarContext = new VarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, drama.RULE_var);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(drama.RESGR);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 97) !== 0)) {
				{
				this.state = 64;
				this.number_();
				}
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
	public str(): StrContext {
		let localctx: StrContext = new StrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, drama.RULE_str);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this.match(drama.STR);
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
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, drama.RULE_arguments);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 69;
				this.double_arg();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 70;
				this.single_arg();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 71;
				this.no_arg();
				}
				break;
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
	public double_arg(): Double_argContext {
		let localctx: Double_argContext = new Double_argContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, drama.RULE_double_arg);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				{
				this.state = 74;
				this.reg();
				}
				break;
			case 29:
				{
				this.state = 75;
				this.cd();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 78;
			this.match(drama.COMMA);
			this.state = 79;
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
	public single_arg(): Single_argContext {
		let localctx: Single_argContext = new Single_argContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, drama.RULE_single_arg);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 81;
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
	public no_arg(): No_argContext {
		let localctx: No_argContext = new No_argContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, drama.RULE_no_arg);
		try {
			this.enterOuterAlt(localctx, 1);
			// tslint:disable-next-line:no-empty
			{
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
	public reg(): RegContext {
		let localctx: RegContext = new RegContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, drama.RULE_reg);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			this.match(drama.REGISTER);
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
	public cd(): CdContext {
		let localctx: CdContext = new CdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, drama.RULE_cd);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			this.match(drama.CD);
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
	public sign(): SignContext {
		let localctx: SignContext = new SignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, drama.RULE_sign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 89;
			_la = this._input.LA(1);
			if(!(_la===49 || _la===50)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public anr(): AnrContext {
		let localctx: AnrContext = new AnrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, drama.RULE_anr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				{
				this.state = 91;
				this.match(drama.REGISTER);
				}
				break;
			case 42:
			case 44:
			case 49:
				{
				this.state = 92;
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
		this.enterRule(localctx, 26, drama.RULE_adr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 95;
				this.match(drama.ID);
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 96;
					this.index();
					}
				}

				}
				break;
			case 2:
				{
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===49) {
					{
					this.state = 99;
					this.match(drama.MINUS);
					}
				}

				this.state = 102;
				this.match(drama.INT);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 103;
					this.index();
					}
				}

				}
				break;
			case 3:
				{
				this.state = 106;
				this.match(drama.ID);
				this.state = 107;
				this.sign();
				this.state = 108;
				this.match(drama.INT);
				}
				break;
			case 4:
				{
				this.state = 110;
				this.match(drama.ID);
				this.state = 111;
				this.sign();
				this.state = 112;
				this.match(drama.INT);
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 113;
					this.index();
					}
				}

				}
				break;
			case 5:
				{
				this.state = 116;
				this.match(drama.INT);
				this.state = 117;
				this.sign();
				this.state = 118;
				this.match(drama.ID);
				}
				break;
			case 6:
				{
				this.state = 120;
				this.match(drama.INT);
				this.state = 121;
				this.sign();
				this.state = 122;
				this.match(drama.ID);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 123;
					this.index();
					}
				}

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
	public index(): IndexContext {
		let localctx: IndexContext = new IndexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, drama.RULE_index);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
			this.match(drama.LP);
			this.state = 135;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				{
				this.state = 129;
				this.sign();
				this.state = 130;
				this.match(drama.REGISTER);
				}
				}
				break;
			case 2:
				{
				{
				this.state = 132;
				this.match(drama.REGISTER);
				this.state = 133;
				this.sign();
				}
				}
				break;
			case 3:
				{
				{
				this.state = 134;
				this.match(drama.REGISTER);
				}
				}
				break;
			}
			this.state = 137;
			this.match(drama.RP);
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
		this.enterRule(localctx, 30, drama.RULE_label);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this.match(drama.ID);
			this.state = 140;
			this.match(drama.COLON);
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
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, drama.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===50) {
				{
				this.state = 142;
				this.sign();
				}
			}

			this.state = 145;
			this.match(drama.INT);
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

	public static readonly _serializedATN: number[] = [4,1,54,148,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	5,0,36,8,0,10,0,12,0,39,9,0,1,0,3,0,42,8,0,1,0,3,0,45,8,0,1,0,1,0,1,1,3,
	1,50,8,1,1,1,3,1,53,8,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,3,2,62,8,2,1,3,1,3,
	3,3,66,8,3,1,4,1,4,1,5,1,5,1,5,3,5,73,8,5,1,6,1,6,3,6,77,8,6,1,6,1,6,1,
	6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,3,12,94,8,12,1,
	13,1,13,3,13,98,8,13,1,13,3,13,101,8,13,1,13,1,13,3,13,105,8,13,1,13,1,
	13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,115,8,13,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,3,13,125,8,13,3,13,127,8,13,1,14,1,14,1,14,1,14,1,14,1,14,
	1,14,3,14,136,8,14,1,14,1,14,1,15,1,15,1,15,1,16,3,16,144,8,16,1,16,1,16,
	1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,1,1,0,49,50,
	156,0,37,1,0,0,0,2,49,1,0,0,0,4,61,1,0,0,0,6,63,1,0,0,0,8,67,1,0,0,0,10,
	72,1,0,0,0,12,76,1,0,0,0,14,81,1,0,0,0,16,83,1,0,0,0,18,85,1,0,0,0,20,87,
	1,0,0,0,22,89,1,0,0,0,24,93,1,0,0,0,26,126,1,0,0,0,28,128,1,0,0,0,30,139,
	1,0,0,0,32,143,1,0,0,0,34,36,3,2,1,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,
	1,0,0,0,37,38,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,40,42,3,30,15,0,41,40,
	1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,45,3,4,2,0,44,43,1,0,0,0,44,45,1,
	0,0,0,45,46,1,0,0,0,46,47,5,0,0,1,47,1,1,0,0,0,48,50,3,30,15,0,49,48,1,
	0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,53,3,4,2,0,52,51,1,0,0,0,52,53,1,0,
	0,0,53,54,1,0,0,0,54,55,5,43,0,0,55,3,1,0,0,0,56,57,5,3,0,0,57,62,3,10,
	5,0,58,62,3,6,3,0,59,62,3,8,4,0,60,62,5,26,0,0,61,56,1,0,0,0,61,58,1,0,
	0,0,61,59,1,0,0,0,61,60,1,0,0,0,62,5,1,0,0,0,63,65,5,27,0,0,64,66,3,32,
	16,0,65,64,1,0,0,0,65,66,1,0,0,0,66,7,1,0,0,0,67,68,5,2,0,0,68,9,1,0,0,
	0,69,73,3,12,6,0,70,73,3,14,7,0,71,73,3,16,8,0,72,69,1,0,0,0,72,70,1,0,
	0,0,72,71,1,0,0,0,73,11,1,0,0,0,74,77,3,18,9,0,75,77,3,20,10,0,76,74,1,
	0,0,0,76,75,1,0,0,0,77,78,1,0,0,0,78,79,5,46,0,0,79,80,3,24,12,0,80,13,
	1,0,0,0,81,82,3,24,12,0,82,15,1,0,0,0,83,84,1,0,0,0,84,17,1,0,0,0,85,86,
	5,28,0,0,86,19,1,0,0,0,87,88,5,29,0,0,88,21,1,0,0,0,89,90,7,0,0,0,90,23,
	1,0,0,0,91,94,5,28,0,0,92,94,3,26,13,0,93,91,1,0,0,0,93,92,1,0,0,0,94,25,
	1,0,0,0,95,97,5,42,0,0,96,98,3,28,14,0,97,96,1,0,0,0,97,98,1,0,0,0,98,127,
	1,0,0,0,99,101,5,49,0,0,100,99,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,
	102,104,5,44,0,0,103,105,3,28,14,0,104,103,1,0,0,0,104,105,1,0,0,0,105,
	127,1,0,0,0,106,107,5,42,0,0,107,108,3,22,11,0,108,109,5,44,0,0,109,127,
	1,0,0,0,110,111,5,42,0,0,111,112,3,22,11,0,112,114,5,44,0,0,113,115,3,28,
	14,0,114,113,1,0,0,0,114,115,1,0,0,0,115,127,1,0,0,0,116,117,5,44,0,0,117,
	118,3,22,11,0,118,119,5,42,0,0,119,127,1,0,0,0,120,121,5,44,0,0,121,122,
	3,22,11,0,122,124,5,42,0,0,123,125,3,28,14,0,124,123,1,0,0,0,124,125,1,
	0,0,0,125,127,1,0,0,0,126,95,1,0,0,0,126,100,1,0,0,0,126,106,1,0,0,0,126,
	110,1,0,0,0,126,116,1,0,0,0,126,120,1,0,0,0,127,27,1,0,0,0,128,135,5,52,
	0,0,129,130,3,22,11,0,130,131,5,28,0,0,131,136,1,0,0,0,132,133,5,28,0,0,
	133,136,3,22,11,0,134,136,5,28,0,0,135,129,1,0,0,0,135,132,1,0,0,0,135,
	134,1,0,0,0,136,137,1,0,0,0,137,138,5,53,0,0,138,29,1,0,0,0,139,140,5,42,
	0,0,140,141,5,51,0,0,141,31,1,0,0,0,142,144,3,22,11,0,143,142,1,0,0,0,143,
	144,1,0,0,0,144,145,1,0,0,0,145,146,5,44,0,0,146,33,1,0,0,0,18,37,41,44,
	49,52,61,65,72,76,93,97,100,104,114,124,126,135,143];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!drama.__ATN) {
			drama.__ATN = new ATNDeserializer().deserialize(drama._serializedATN);
		}

		return drama.__ATN;
	}


	static DecisionsToDFA = drama._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StartContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(drama.EOF, 0);
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
	public instr(): InstrContext {
		return this.getTypedRuleContext(InstrContext, 0) as InstrContext;
	}
    public get ruleIndex(): number {
    	return drama.RULE_start;
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


export class LineContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOL(): TerminalNode {
		return this.getToken(drama.EOL, 0);
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
	public instr(): InstrContext {
		return this.getTypedRuleContext(InstrContext, 0) as InstrContext;
	}
    public get ruleIndex(): number {
    	return drama.RULE_line;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstrContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INSTR_MODE(): TerminalNode {
		return this.getToken(drama.INSTR_MODE, 0);
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	public var_(): VarContext {
		return this.getTypedRuleContext(VarContext, 0) as VarContext;
	}
	public str(): StrContext {
		return this.getTypedRuleContext(StrContext, 0) as StrContext;
	}
	public EINDPR(): TerminalNode {
		return this.getToken(drama.EINDPR, 0);
	}
    public get ruleIndex(): number {
    	return drama.RULE_instr;
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


export class VarContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESGR(): TerminalNode {
		return this.getToken(drama.RESGR, 0);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
    public get ruleIndex(): number {
    	return drama.RULE_var;
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


export class StrContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STR(): TerminalNode {
		return this.getToken(drama.STR, 0);
	}
    public get ruleIndex(): number {
    	return drama.RULE_str;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitStr) {
			return visitor.visitStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public double_arg(): Double_argContext {
		return this.getTypedRuleContext(Double_argContext, 0) as Double_argContext;
	}
	public single_arg(): Single_argContext {
		return this.getTypedRuleContext(Single_argContext, 0) as Single_argContext;
	}
	public no_arg(): No_argContext {
		return this.getTypedRuleContext(No_argContext, 0) as No_argContext;
	}
    public get ruleIndex(): number {
    	return drama.RULE_arguments;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Double_argContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(drama.COMMA, 0);
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
	public reg(): RegContext {
		return this.getTypedRuleContext(RegContext, 0) as RegContext;
	}
	public cd(): CdContext {
		return this.getTypedRuleContext(CdContext, 0) as CdContext;
	}
    public get ruleIndex(): number {
    	return drama.RULE_double_arg;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitDouble_arg) {
			return visitor.visitDouble_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_argContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public anr(): AnrContext {
		return this.getTypedRuleContext(AnrContext, 0) as AnrContext;
	}
    public get ruleIndex(): number {
    	return drama.RULE_single_arg;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitSingle_arg) {
			return visitor.visitSingle_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class No_argContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return drama.RULE_no_arg;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitNo_arg) {
			return visitor.visitNo_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REGISTER(): TerminalNode {
		return this.getToken(drama.REGISTER, 0);
	}
    public get ruleIndex(): number {
    	return drama.RULE_reg;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitReg) {
			return visitor.visitReg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CdContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CD(): TerminalNode {
		return this.getToken(drama.CD, 0);
	}
    public get ruleIndex(): number {
    	return drama.RULE_cd;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitCd) {
			return visitor.visitCd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(drama.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(drama.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return drama.RULE_sign;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitSign) {
			return visitor.visitSign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnrContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REGISTER(): TerminalNode {
		return this.getToken(drama.REGISTER, 0);
	}
	public adr(): AdrContext {
		return this.getTypedRuleContext(AdrContext, 0) as AdrContext;
	}
    public get ruleIndex(): number {
    	return drama.RULE_anr;
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
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(drama.ID, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(drama.INT, 0);
	}
	public sign(): SignContext {
		return this.getTypedRuleContext(SignContext, 0) as SignContext;
	}
	public index(): IndexContext {
		return this.getTypedRuleContext(IndexContext, 0) as IndexContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(drama.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return drama.RULE_adr;
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


export class IndexContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LP(): TerminalNode {
		return this.getToken(drama.LP, 0);
	}
	public RP(): TerminalNode {
		return this.getToken(drama.RP, 0);
	}
	public sign(): SignContext {
		return this.getTypedRuleContext(SignContext, 0) as SignContext;
	}
	public REGISTER(): TerminalNode {
		return this.getToken(drama.REGISTER, 0);
	}
    public get ruleIndex(): number {
    	return drama.RULE_index;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(drama.ID, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(drama.COLON, 0);
	}
    public get ruleIndex(): number {
    	return drama.RULE_label;
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


export class NumberContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(drama.INT, 0);
	}
	public sign(): SignContext {
		return this.getTypedRuleContext(SignContext, 0) as SignContext;
	}
    public get ruleIndex(): number {
    	return drama.RULE_number;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
