/* eslint-disable-next-line import/no-unresolved */
const vscode = require('vscode');
const { addKey, testFunc } = require('./commands');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
exports.activate = function activate(context) {
  // This line of code will only be executed once when your extension is activated
  console.log('vscode-gists is now active');

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.addKey', addKey),
    vscode.commands.registerCommand('extension.test', testFunc),
  );
};

// this method is called when your extension is deactivated
exports.deactivate = function deactivate() { };
