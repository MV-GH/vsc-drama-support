// Generated from definitions/drama.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { StartContext } from "./dramaParser";
import { InstrContext } from "./dramaParser";
import { HiaIContext } from "./dramaParser";
import { BigIContext } from "./dramaParser";
import { OptIContext } from "./dramaParser";
import { AftIContext } from "./dramaParser";
import { DelIContext } from "./dramaParser";
import { VerIContext } from "./dramaParser";
import { ModIContext } from "./dramaParser";
import { VglIContext } from "./dramaParser";
import { SprIContext } from "./dramaParser";
import { SbrIContext } from "./dramaParser";
import { BstIContext } from "./dramaParser";
import { HstIContext } from "./dramaParser";
import { VspIContext } from "./dramaParser";
import { VarContext } from "./dramaParser";
import { AnrContext } from "./dramaParser";
import { AdrContext } from "./dramaParser";
import { LabelContext } from "./dramaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `dramaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class dramaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `dramaParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.instr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstr?: (ctx: InstrContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.hiaI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHiaI?: (ctx: HiaIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.bigI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBigI?: (ctx: BigIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.optI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptI?: (ctx: OptIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.aftI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAftI?: (ctx: AftIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.delI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelI?: (ctx: DelIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.verI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerI?: (ctx: VerIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.modI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModI?: (ctx: ModIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.vglI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVglI?: (ctx: VglIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.sprI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSprI?: (ctx: SprIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.sbrI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSbrI?: (ctx: SbrIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.bstI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBstI?: (ctx: BstIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.hstI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHstI?: (ctx: HstIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.vspI`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVspI?: (ctx: VspIContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.anr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnr?: (ctx: AnrContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.adr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdr?: (ctx: AdrContext) => Result;
	/**
	 * Visit a parse tree produced by `dramaParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;
}

