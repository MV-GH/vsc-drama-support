// Generated from grammars/drama.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import type * as drama from "./drama";

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
	visitStart?: (ctx: drama.StartContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: drama.LineContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstr?: (ctx: drama.InstrContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: drama.VarContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStr?: (ctx: drama.StrContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: drama.ArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.double_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble_arg?: (ctx: drama.Double_argContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.single_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_arg?: (ctx: drama.Single_argContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.no_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNo_arg?: (ctx: drama.No_argContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.reg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg?: (ctx: drama.RegContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.cd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd?: (ctx: drama.CdContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.sign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSign?: (ctx: drama.SignContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.anr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnr?: (ctx: drama.AnrContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.adr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdr?: (ctx: drama.AdrContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex?: (ctx: drama.IndexContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: drama.LabelContext) => Result;
	/**
	 * Visit a parse tree produced by `drama.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: drama.NumberContext) => Result;
}

