
import { CharStreams } from 'antlr4';
import * as vscode from 'vscode';
import { formatInput } from './test';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "drama-support" is now active!');

	//Create output channel
	let orange = vscode.window.createOutputChannel("Orange");
	orange.show()
	//Write to output.
	orange.appendLine("I am a banana.");
	vscode.window.showInformationMessage(
		"Active you are"
	);

	const disposable = vscode.languages.registerDocumentFormattingEditProvider({ "language": 'drama' }, {
		provideDocumentFormattingEdits(document) {

			vscode.window.showInformationMessage(
				"format you shall"
			);
			orange.append(document.getText())
			const output = formatInput(CharStreams.fromString(document.getText()))
			const range = new vscode.Range(0, 0, document.lineCount, document.lineAt(document.lineCount - 1).text.length);
			return [vscode.TextEdit.replace(range, output)];
		}
	});
	context.subscriptions.push(disposable)

}
// This method is called when your extension is deactivated
export function deactivate() { }
