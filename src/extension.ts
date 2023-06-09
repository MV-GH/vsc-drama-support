
import { CharStreams } from 'antlr4';
import * as vscode from 'vscode';
import { formatInput } from './Formatter';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "drama-support" is now active!');


	//Write to output.
	// vscode.window.showInformationMessage(
	// 	"Active you are"
	// );

	const disposable = vscode.languages.registerDocumentFormattingEditProvider({ "language": 'drama' }, {
		provideDocumentFormattingEdits(document) {

			// vscode.window.showInformationMessage(
			// 	"format you shall"
			// );

			const config = vscode.workspace.getConfiguration("drama")
			try {
				const output = formatInput(CharStreams.fromString(document.getText() + "\n"), config)
				const range = new vscode.Range(0, 0, document.lineCount, document.lineAt(document.lineCount - 1).text.length);
				return [vscode.TextEdit.replace(range, output)];
			} catch (error) {
				console.error(error)
			}
		}
	});

	context.subscriptions.push(disposable)

}
// This method is called when your extension is deactivated
export function deactivate() { }
