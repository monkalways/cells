## Table of Contents

- [Table of Contents](#table-of-contents)
- [Quick Start](#quick-start)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run lint (-s)`](#npm-run-lint--s)
  - [`npm run eject (don't run)`](#npm-run-eject-dont-run)
- [Local Dev Env Setup](#local-dev-env-setup)
  - [Prerequisites](#prerequisites)
    - [git](#git)
    - [node.js](#nodejs)
  - [Checkout Code](#checkout-code)
  - [Run the Application for the First Time](#run-the-application-for-the-first-time)
  - [IDE](#ide)
    - [Debugger for Chrome Extension](#debugger-for-chrome-extension)
    - [ESLint Extension](#eslint-extension)
    - [Prettier Extension](#prettier-extension)
    - [Other Extensions](#other-extensions)
  - [Coding Style Guide](#coding-style-guide)
  - [Reference Project Structure](#reference-project-structure)

## Quick Start

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also includes [a service worker](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that the app loads from local cache on future visits.

See the section about [deployment](#deployment) for more information.

### `npm run lint (-s)`

Runs `ESLint` against the `.js` and `.jsx` file in the `src` directory.<br>
By default, `ESLint` will exit the `npm run` process with non-zero return code, if there's any linting error. Using the `-s` flag will silent the `npm run` process error, but keep the linting errors.

See the section about [Coding Style Guide](#coding-style-guide) for more information about linting.

### `npm run eject (don't run)`

> Note: this is a one-way operation. Once you `eject`, you can't go back.

This command will remove the single build dependency to `react-scripts` from the project. Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into the project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

If you aren’t satisfied with the build tool and configuration choices, talk to the team leader or architect to see if a `reject` is necessary.

## Local Dev Env Setup

### Prerequisites

#### git

`git` is used for version control in the project.

1. Download the [`git` Windows Installer](https://git-scm.com/download/win) and install `git` on your local VM.

2. Verify the installation was successful by checking version.
   ```
   $ git --version
   git version 2.14.1.windows.1
   ```
3. Configure `git` global user name and email.
   ```
   git config --global user.name "<YOUR NAME>"
   git config --global user.email "<YOUR EMAIL>"
   ```

#### node.js

`react` and its dependencies are maintained and published as `NPM (Node Package Manager)` packages, which runs on top of the `node.js` JavaScript runtime.

1. Download the [`node.js` Windows Installer](https://nodejs.org/en/download/)] and install `node.js` on your local VM.
   > Make sure the `LTS` version is installed.
2. Verify the installation was successful by checking version.
   ```
   $ node --version
   v8.11.4
   ```
3. Setup HTTP(S) proxy and cafile for NPM to be able to connect NPM registry. Remember to replace user name and password below with your domain account. The EPSORCA.crt is included in the `certificate` folder of the project folder. (See the section about [Checkout Code](#checkout-code) to get the project folder.)
   ```
   npm config set proxy http://epsvc%5C[USER_NAME]:[PASSWORD]@proxy.police.edmonton.ab.ca:8080
   npm config set https.proxy http://epsvc%5C[USER_NAME]:[PASSWORD]@proxy.police.edmonton.ab.ca:8080
   npm config set cafile [PATH_TO_EPSORCA.crt]
   npm config set strict-ssl false
   ```
4. Update local `NPM` version
   ```
   npm install npm --global // Update the `npm` CLI client
   ```

### Checkout Code

Create a local directory, and clone the remote `git` repository to local repository.

If you prefer to use command lines, here's an example.

```cmd
mkdir EPS.RMS.DetaineeManagement.Map
cd EPS.RMS.DetaineeManagement.Map
git clone http://teamsystem:8080/tfs/EPROS/EPS.RMS.DetaineeManagement.Map/_git/git-repo .
```

You will get prompted for user name and password to access the `git` repository for the first time.

### Run the Application for the First Time

When you run the application for the first time in the project folder, you may run into the following error.

```sh
$ npm start

> source@0.1.0 start <YOUR_PROJECT_FOLDER>
> react-scripts start

module.js:549
    throw err;
    ^

Error: Cannot find module 'upath'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (C:\workspaces\EPROS\DMU\git-repo1\node_modules\chokidar\index.js:13:13)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@0.1.0 start: `react-scripts start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the source@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\<USER_NAME>\AppData\Roaming\npm-cache\_logs\<TIMESTAMP>.log
```

This error is due to an issue with the `upath` package when the `node_modules` folder is checked into `git`. To fix the issue, run the following:

```sh
npm install --no-save upath@1.1.0
git reset --hard
```

Then run `npm start` again, the application should be started successfully this time.

```sh
$ npm start

> source@0.1.0 start <YOUR_PROJECT_FOLDER>
> react-scripts start

Compiled successfully!

You can now view source in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.0.112.134:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### IDE

[Visual Studio Code (VS Code)](#https://code.visualstudio.com/) is the recommended IDE for development. Visual Studio 2017 can also be used, but because it lacks some of the major extensions that can help to streamline development and increase productivity, it's not recommended.

Once the VS Code is installed, you can load the project as following:

```cmd
cd EPS.RMS.DetaineeManagement.Map
code .
```

Add the following **VS Code HTTP Proxy Configurations** in your [VS Code User Settings](https://code.visualstudio.com/docs/getstarted/settings) for VS Code to connect to the Internet.

```json
{
  "http.proxy": "http://epsvc%5C[USER_NAME]:[PASSWORD]@proxy.police.edmonton.ab.ca:8080",
  "http.proxyStrictSSL": false
}
```

The following VS Code extensions are recommended.

#### Debugger for Chrome Extension

The [Debugger for Chrome Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) allows you to debug JavaScript code in the `Google Chrome` browser.

After the extension is installed, run `npm install` to start the local development server and press `F5` to start debugging. For more information on debug configuration, check the `launch.json` file in the `.vscode` folder.

#### ESLint Extension

The [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) integrates [ESLint](http://eslint.org/) into VS Code.

The `ESLint Extension` should work immediately after installation. No configuration change is required. When a linting error/warning is detected, this extension will display the error/warning in the `PROBLEMS` tab in VS Code.

See the section about [Coding Style Guide](#coding-style-guide) for more information about linting.

#### Prettier Extension

The [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) formats the JavaScript/CSS code using [Prettier](https://github.com/prettier/prettier).

To format a document,

```
1. Ctrl + Shift + p -> Format Document

OR

2. Alt + Shift + f
```

The `Prettier Extension` works together the `ESLint` to enforce coding styles on the project. The following `Prettier Extension` configurations are included in the [VS Code Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings) in the project folder.

```json
{
  "prettier.eslintIntegration": true,
  "editor.tabSize": 2, // be consistent with prettier configuration
  "editor.formatOnSave": true // auto format code after saving file
}
```

#### Other Extensions

Althought not required for development, here's a list of other `VS Code Extensions` that might worth a try.

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [React-Native/React/Redux snippets for es6/es7](https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

### Coding Style Guide

See the [Coding Style Guide](/React-Application-Coding-Style-Guide) page for details.

### Reference Project Structure

See the [Reference Project Structure](/React%2DRedux-Application-Reference-Project-Structure) page for details.
