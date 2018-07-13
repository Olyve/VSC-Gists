/* eslint-disable-next-line import/no-unresolved */
const vscode = require('vscode');

exports.addKey = () => {
  // Display a message box to the user
  vscode.window.showInformationMessage('Hello World!');
};

exports.savePublicGist = () => {
  vscode.window.showInformationMessage('Saved as Public Gist');
};

exports.savePrivateGist = () => {
  vscode.window.showInformationMessage('Saved as Private Gist');
};
