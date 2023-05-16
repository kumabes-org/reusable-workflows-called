const core = require('@actions/core');
const github = require('@actions/github');

try {
  const url = core.getInput('url');
  const username = core.getInput('username');
  const password = core.getInput('password');

  const message = `URL: ${url} - USERNAME: ${username} - PASSWORD: ${password}`;
  
  core.setOutput("message", message);  
  console.log(`message: ${message}`);
} catch (error) {
  core.setFailed(error.message);
}