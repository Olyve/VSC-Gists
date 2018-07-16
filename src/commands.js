/* eslint-disable-next-line import/no-unresolved */
const { window } = require('vscode');

const storedAPIKey = 'vscode-gists.apiKey';

exports.addKey = (context) => {
  // Display a message box to the user
  const inputOptions = {
    placeholder: 'Personal Access Token',
    prompt: `Please go to GitHub.com, Settings -> Developer Settings -> Personal Access Tokens. Click 'Generate new token'.
    Enter a description, such as 'vscode-gists-token', and check the permission for gist. Generate the token and then paste
    the value into the box above.`,
    ignoreFocusOut: true,
  };
  window.showInputBox(inputOptions).then((token) => {
    if (token === undefined || token.trim() === '') {
      return window.showErrorMessage('Your token cannot be empty. Please try entering it again.');
    }

    return context.globalState.update(storedAPIKey, token)
      .then(() => {
        window.showInformationMessage('API token has been saved. You are now good to go!');
      })
      .catch((err) => {
        window.showErrorMessage(`An error has occured: ${err}`);
      });
  });
};

exports.savePublicGist = (context) => {
  window.showInformationMessage(`Your key is: ${context.globalState.get(storedAPIKey)}`);
};

exports.savePrivateGist = (context) => {
  window.showInformationMessage(`Your key is: ${context.globalState.get(storedAPIKey)}`);
};
