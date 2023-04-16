// Generated from grammars/drama.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import type { StartContext } from "./drama";
import type { LineContext } from "./drama";
import type { InstrContext } from "./drama";
import type { VarContext } from "./drama";
import type { ArgumentsContext } from "./drama";
import type { Double_argContext } from "./drama";
import type { Single_argContext } from "./drama";
import type { No_argContext } from "./drama";
import type { RegContext } from "./drama";
import type { CdContext } from "./drama";
import type { SignContext } from "./drama";
import type { AnrContext } from "./drama";
import type { AdrContext } from "./drama";
import type { IndexContext } from "./drama";
import type { LabelContext } from "./drama";
import type { NumberContext } from "./drama";
import type { ArrContext } from "./drama";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `drama`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class dramaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `drama.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstr?: (ctx: InstrContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.double_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble_arg?: (ctx: Double_argContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.single_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_arg?: (ctx: Single_argContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.no_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNo_arg?: (ctx: No_argContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg?: (ctx: RegContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.cd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd?: (ctx: CdContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.sign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSign?: (ctx: SignContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.anr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnr?: (ctx: AnrContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.adr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdr?: (ctx: AdrContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex?: (ctx: IndexContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.arr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArr?: (ctx: ArrContext) => Result;
}

