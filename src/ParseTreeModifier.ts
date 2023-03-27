import { CommonTokenStream, Token } from "antlr4";
import DramaLexer from "./antlr/DRAMA_Lexer";
import * as vscode from 'vscode'

export default function modifyParseTree(tokenStream: CommonTokenStream, config: vscode.WorkspaceConfiguration) {

    const casing: Casing = config.get("casing") || { keyword: CaseOptions.DoNotChange, label: CaseOptions.DoNotChange };

    for (const token of tokenStream.tokens as unknown as Token[]) {
        if (token.type === DramaLexer.INSTR_MODE) {
            token.text = token.text.replace(/\s+/g, "")
        }
        if (casing.keyword !== CaseOptions.DoNotChange && isKeyword(token.type)) {
            if (token.type === DramaLexer.INSTR_MODE) {
                const group = token.text.match("^(.+?)(\\.\\w)?$")!;
                token.text = applyCaseOption(group[1], casing.keyword)
                if (group[2] !== undefined) {
                    token.text += group[2].toLowerCase()
                }
            } else {
                token.text = applyCaseOption(token.text, casing.keyword)
            }


        } else if (isLabel(token.type) && casing.label !== CaseOptions.DoNotChange) {
            token.text = applyCaseOption(token.text, casing.label)
        }
    }

}

function applyCaseOption(text: string, caseOption: CaseOptions) {
    return caseOption === CaseOptions.ToUpper ? text.toUpperCase() : text.toLowerCase()
}

function isKeyword(type: number) {
    return [DramaLexer.REGISTER, DramaLexer.CD, DramaLexer.INSTR_MODE, DramaLexer.INSTR, DramaLexer.RESGR, DramaLexer.EINDPR].includes(type);
}
function isLabel(type: number) {
    return DramaLexer.ID === type;
}

interface Casing { keyword: CaseOptions; label: CaseOptions }

enum CaseOptions {
    DoNotChange = "Do not change",
    ToUpper = "To upper",
    ToLower = "To lower",
}