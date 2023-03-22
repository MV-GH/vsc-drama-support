// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { CharStream, CharStreams } from 'antlr4';
import * as vscode from 'vscode';
import { formatInput } from './test';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jstest" is now active!');

	const disposable = vscode.languages.registerDocumentFormattingEditProvider({ "language": 'drama' }, {
		provideDocumentFormattingEdits(document) {

			const output = formatInput(CharStreams.fromString(document.getText()))
			const range = new vscode.Range(0, 0, document.lineCount, document.lineAt(document.lineCount - 1).text.length);
			return [vscode.TextEdit.replace(range, output)];
		}
	});
	context.subscriptions.push(disposable)

}
// This method is called when your extension is deactivated
function deactivate() { }

export default {
	activate,
	deactivate
}
