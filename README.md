This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It is recommended to familiarize with their documentation if you haven't so far.  

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - TODO@martins add all scripts
- [Libraries used](#libraries-used)  
- [Code Quality](#code-quality)  
  - [Linting](#linting)       
  - [Formatting](#formatting)
  - [Git hooks](#git-hooks)

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    TODO@martins add project structure
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

TODO@martins add all scripts. 

# Libraries used

Most notables libraries used are:  
- [React](https://reactjs.org/) - obviously :) 
- [Redux](https://redux.js.org/) - for state management
- [Redux-Saga](https://redux.js.org/) - for handling side effects (mostly for data fetching) 
- [React Router](https://reacttraining.com/react-router/web/guides/philosophy) - for routing
- [Flow](https://flow.org/) - for static type checking

# Code Quality

## Linting 

Linting is done using [ESLint](https://eslint.org/) using slightly modified [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Formatting

Automatic formatting is done using [Prettier](https://github.com/prettier/prettier) by calling `yarn run format` script or by triggering committing changes to the local repository. 

## Git hooks

To maintain code quality, git hooks are set-up to trigger [lint](#linting) and [format](#formatting) scripts on `git commit` and `git push`.    
 (TODO@martins: add test hooks to doc)