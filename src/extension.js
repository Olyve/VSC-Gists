/* eslint-disable-next-line import/no-unresolved */
const { commands } = require('vscode');
const { addKey, savePublicGist, savePrivateGist } = require('./commands');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
exports.activate = function activate(context) {
  // Log when extension is activated
  console.log('vscode-gists is now active');

  context.subscriptions.push(
    commands.registerCommand('extension.addKey', () => addKey(context)),
    commands.registerCommand('extension.savePublicGist', () => savePublicGist(context)),
    commands.registerCommand('extension.savePrivateGist', () => savePrivateGist(context)),
  );
};

// this method is called when your extension is deactivated
exports.deactivate = function deactivate() {
  // Log when extension deactivates, make sure this is last line called
  console.log('vscode-gists is now deactivated.');
};
