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
import { SkipLineError } from '../Constants.ts';

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
	public static readonly SEMI_COLON = 52;
	public static readonly LP = 53;
	public static readonly RP = 54;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_start = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_instr = 2;
	public static readonly RULE_var = 3;
	public static readonly RULE_arguments = 4;
	public static readonly RULE_double_arg = 5;
	public static readonly RULE_single_arg = 6;
	public static readonly RULE_no_arg = 7;
	public static readonly RULE_reg = 8;
	public static readonly RULE_cd = 9;
	public static readonly RULE_sign = 10;
	public static readonly RULE_anr = 11;
	public static readonly RULE_adr = 12;
	public static readonly RULE_index = 13;
	public static readonly RULE_label = 14;
	public static readonly RULE_number = 15;
	public static readonly RULE_arr = 16;
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
                                                            "':'", "';'", 
                                                            "'('", "')'" ];
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
                                                             "COLON", "SEMI_COLON", 
                                                             "LP", "RP" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "line", "instr", "var", "arguments", "double_arg", "single_arg", 
		"no_arg", "reg", "cd", "sign", "anr", "adr", "index", "label", "number", 
		"arr",
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
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la !== drama.EOF) {
					{
						{
							this.state = 34;
							this.line();
						}
					}
					this.state = 39;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 40;
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
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 42;
				this.label();
				}
			}

			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 201326604) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 97) !== 0)) {
				{
				this.state = 45;
				this.instr();
				}
			}

			this.state = 48;
			this.match(drama.EOL);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else if (re instanceof SkipLineError) {
				this._errHandler.reportError(this, re);
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
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 50;
				this.match(drama.INSTR_MODE);
				this.state = 51;
				this.arguments();
				}
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 52;
				this.var_();
				}
				break;
			case 2:
			case 44:
			case 49:
			case 50:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 53;
				this.arr();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 54;
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
			this.state = 57;
			this.match(drama.RESGR);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 97) !== 0)) {
				{
				this.state = 58;
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
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, drama.RULE_arguments);
		try {
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 61;
				this.double_arg();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 62;
				this.single_arg();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 63;
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
		this.enterRule(localctx, 10, drama.RULE_double_arg);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				{
				this.state = 66;
				this.reg();
				}
				break;
			case 29:
				{
				this.state = 67;
				this.cd();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 70;
			this.match(drama.COMMA);
			this.state = 71;
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
		this.enterRule(localctx, 12, drama.RULE_single_arg);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
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
		this.enterRule(localctx, 14, drama.RULE_no_arg);
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
		this.enterRule(localctx, 16, drama.RULE_reg);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
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
		this.enterRule(localctx, 18, drama.RULE_cd);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
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
		this.enterRule(localctx, 20, drama.RULE_sign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 81;
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
		this.enterRule(localctx, 22, drama.RULE_anr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				{
				this.state = 83;
				this.match(drama.REGISTER);
				}
				break;
			case 42:
			case 44:
			case 49:
			case 50:
				{
				this.state = 84;
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
		this.enterRule(localctx, 24, drama.RULE_adr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 87;
				this.match(drama.ID);
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 88;
					this.index();
					}
				}

				}
				break;
			case 2:
				{
				this.state = 91;
				this.number_();
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 92;
					this.index();
					}
				}

				}
				break;
			case 3:
				{
				this.state = 95;
				this.number_();
				this.state = 96;
				this.sign();
				this.state = 97;
				this.match(drama.INT);
				}
				break;
			case 4:
				{
				this.state = 99;
				this.match(drama.ID);
				this.state = 100;
				this.sign();
				this.state = 101;
				this.match(drama.INT);
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 102;
					this.index();
					}
				}

				}
				break;
			case 5:
				{
				this.state = 105;
				this.number_();
				this.state = 106;
				this.sign();
				this.state = 107;
				this.match(drama.ID);
				}
				break;
			case 6:
				{
				this.state = 109;
				this.number_();
				this.state = 110;
				this.sign();
				this.state = 111;
				this.match(drama.ID);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 112;
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
		this.enterRule(localctx, 26, drama.RULE_index);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 117;
			this.match(drama.LP);
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				{
				this.state = 118;
				this.sign();
				this.state = 119;
				this.match(drama.REGISTER);
				}
				}
				break;
			case 2:
				{
				{
				this.state = 121;
				this.match(drama.REGISTER);
				this.state = 122;
				this.sign();
				}
				}
				break;
			case 3:
				{
				{
				this.state = 123;
				this.match(drama.REGISTER);
				}
				}
				break;
			}
			this.state = 126;
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
		this.enterRule(localctx, 28, drama.RULE_label);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
			this.match(drama.ID);
			this.state = 129;
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
		this.enterRule(localctx, 30, drama.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===50) {
				{
				this.state = 131;
				this.sign();
				}
			}

			this.state = 134;
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
	// @RuleVersion(0)
	public arr(): ArrContext {
		let localctx: ArrContext = new ArrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, drama.RULE_arr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
			case 49:
			case 50:
				{
				this.state = 136;
				this.number_();
				}
				break;
			case 2:
				{
				this.state = 137;
				this.match(drama.STR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===52) {
				{
				{
				this.state = 140;
				this.match(drama.SEMI_COLON);
				this.state = 143;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
				case 49:
				case 50:
					{
					this.state = 141;
					this.number_();
					}
					break;
				case 2:
					{
					this.state = 142;
					this.match(drama.STR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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

	public static readonly _serializedATN: number[] = [4,1,54,151,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	5,0,36,8,0,10,0,12,0,39,9,0,1,0,1,0,1,1,3,1,44,8,1,1,1,3,1,47,8,1,1,1,1,
	1,1,2,1,2,1,2,1,2,1,2,3,2,56,8,2,1,3,1,3,3,3,60,8,3,1,4,1,4,1,4,3,4,65,
	8,4,1,5,1,5,3,5,69,8,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,
	1,10,1,11,1,11,3,11,86,8,11,1,12,1,12,3,12,90,8,12,1,12,1,12,3,12,94,8,
	12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,104,8,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,3,12,114,8,12,3,12,116,8,12,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,3,13,125,8,13,1,13,1,13,1,14,1,14,1,14,1,15,3,15,133,8,15,
	1,15,1,15,1,16,1,16,3,16,139,8,16,1,16,1,16,1,16,3,16,144,8,16,5,16,146,
	8,16,10,16,12,16,149,9,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,
	26,28,30,32,0,1,1,0,49,50,159,0,37,1,0,0,0,2,43,1,0,0,0,4,55,1,0,0,0,6,
	57,1,0,0,0,8,64,1,0,0,0,10,68,1,0,0,0,12,73,1,0,0,0,14,75,1,0,0,0,16,77,
	1,0,0,0,18,79,1,0,0,0,20,81,1,0,0,0,22,85,1,0,0,0,24,115,1,0,0,0,26,117,
	1,0,0,0,28,128,1,0,0,0,30,132,1,0,0,0,32,138,1,0,0,0,34,36,3,2,1,0,35,34,
	1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,
	0,0,0,40,41,5,0,0,1,41,1,1,0,0,0,42,44,3,28,14,0,43,42,1,0,0,0,43,44,1,
	0,0,0,44,46,1,0,0,0,45,47,3,4,2,0,46,45,1,0,0,0,46,47,1,0,0,0,47,48,1,0,
	0,0,48,49,5,43,0,0,49,3,1,0,0,0,50,51,5,3,0,0,51,56,3,8,4,0,52,56,3,6,3,
	0,53,56,3,32,16,0,54,56,5,26,0,0,55,50,1,0,0,0,55,52,1,0,0,0,55,53,1,0,
	0,0,55,54,1,0,0,0,56,5,1,0,0,0,57,59,5,27,0,0,58,60,3,30,15,0,59,58,1,0,
	0,0,59,60,1,0,0,0,60,7,1,0,0,0,61,65,3,10,5,0,62,65,3,12,6,0,63,65,3,14,
	7,0,64,61,1,0,0,0,64,62,1,0,0,0,64,63,1,0,0,0,65,9,1,0,0,0,66,69,3,16,8,
	0,67,69,3,18,9,0,68,66,1,0,0,0,68,67,1,0,0,0,69,70,1,0,0,0,70,71,5,46,0,
	0,71,72,3,22,11,0,72,11,1,0,0,0,73,74,3,22,11,0,74,13,1,0,0,0,75,76,1,0,
	0,0,76,15,1,0,0,0,77,78,5,28,0,0,78,17,1,0,0,0,79,80,5,29,0,0,80,19,1,0,
	0,0,81,82,7,0,0,0,82,21,1,0,0,0,83,86,5,28,0,0,84,86,3,24,12,0,85,83,1,
	0,0,0,85,84,1,0,0,0,86,23,1,0,0,0,87,89,5,42,0,0,88,90,3,26,13,0,89,88,
	1,0,0,0,89,90,1,0,0,0,90,116,1,0,0,0,91,93,3,30,15,0,92,94,3,26,13,0,93,
	92,1,0,0,0,93,94,1,0,0,0,94,116,1,0,0,0,95,96,3,30,15,0,96,97,3,20,10,0,
	97,98,5,44,0,0,98,116,1,0,0,0,99,100,5,42,0,0,100,101,3,20,10,0,101,103,
	5,44,0,0,102,104,3,26,13,0,103,102,1,0,0,0,103,104,1,0,0,0,104,116,1,0,
	0,0,105,106,3,30,15,0,106,107,3,20,10,0,107,108,5,42,0,0,108,116,1,0,0,
	0,109,110,3,30,15,0,110,111,3,20,10,0,111,113,5,42,0,0,112,114,3,26,13,
	0,113,112,1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,115,87,1,0,0,0,115,91,
	1,0,0,0,115,95,1,0,0,0,115,99,1,0,0,0,115,105,1,0,0,0,115,109,1,0,0,0,116,
	25,1,0,0,0,117,124,5,53,0,0,118,119,3,20,10,0,119,120,5,28,0,0,120,125,
	1,0,0,0,121,122,5,28,0,0,122,125,3,20,10,0,123,125,5,28,0,0,124,118,1,0,
	0,0,124,121,1,0,0,0,124,123,1,0,0,0,125,126,1,0,0,0,126,127,5,54,0,0,127,
	27,1,0,0,0,128,129,5,42,0,0,129,130,5,51,0,0,130,29,1,0,0,0,131,133,3,20,
	10,0,132,131,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,0,134,135,5,44,0,0,135,
	31,1,0,0,0,136,139,3,30,15,0,137,139,5,2,0,0,138,136,1,0,0,0,138,137,1,
	0,0,0,139,147,1,0,0,0,140,143,5,52,0,0,141,144,3,30,15,0,142,144,5,2,0,
	0,143,141,1,0,0,0,143,142,1,0,0,0,144,146,1,0,0,0,145,140,1,0,0,0,146,149,
	1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,33,1,0,0,0,149,147,1,0,0,0,
	18,37,43,46,55,59,64,68,85,89,93,103,113,115,124,132,138,143,147];

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
	public arr(): ArrContext {
		return this.getTypedRuleContext(ArrContext, 0) as ArrContext;
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
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public sign(): SignContext {
		return this.getTypedRuleContext(SignContext, 0) as SignContext;
	}
	public INT(): TerminalNode {
		return this.getToken(drama.INT, 0);
	}
	public index(): IndexContext {
		return this.getTypedRuleContext(IndexContext, 0) as IndexContext;
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


export class ArrContext extends ParserRuleContext {
	constructor(parser?: drama, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public number__list(): NumberContext[] {
		return this.getTypedRuleContexts(NumberContext) as NumberContext[];
	}
	public number_(i: number): NumberContext {
		return this.getTypedRuleContext(NumberContext, i) as NumberContext;
	}
	public STR_list(): TerminalNode[] {
	    	return this.getTokens(drama.STR);
	}
	public STR(i: number): TerminalNode {
		return this.getToken(drama.STR, i);
	}
	public SEMI_COLON_list(): TerminalNode[] {
	    	return this.getTokens(drama.SEMI_COLON);
	}
	public SEMI_COLON(i: number): TerminalNode {
		return this.getToken(drama.SEMI_COLON, i);
	}
    public get ruleIndex(): number {
    	return drama.RULE_arr;
	}
	// @Override
	public accept<Result>(visitor: dramaVisitor<Result>): Result {
		if (visitor.visitArr) {
			return visitor.visitArr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
