## eslint
- ESLint performs automated scans of your JavaScript files for common syntax and style errors. 
- Prettier scans your files for style issues and automatically reformats your code to ensure consistent rules are being followed for indentation, spacing, semicolons, single quotes vs double quotes, etc.


## Babel
- Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones). 

### @babel/cli
- used to compile files from the command line.
### @babel/core
- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

###  "@babel/plugin-proposal-class-properties"
- This plugin transforms static class properties as well as properties declared with the property initializer syntax.

### "@babel/plugin-transform-modules-commonjs"
- This plugin transforms ECMAScript modules to CommonJS. 

### "@babel/plugin-transform-runtime"
- To undersand async and await

### @babel/preset-env
- Teaches the babel to understand es2015

-  is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). 

### html-webpack-plugin
- simplifies creation of HTML files to serve your webpack bundles.

## Jest
- Jest is a JavaScript test runner, that is, a JavaScript library for creating, running, and structuring tests. 
- Jest is a testing library for JavaScript and it's developed by Facebook for use within ReactJS
- It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more

## jest -watch

- When configuring Jest watch mode, which allows runs tests related to only the files that have changed

## webpack
- Webpack is a tool that lets you compile JavaScript modules, also known as module bundler. Given a large number of files, it generates a single file (or a few files) that run your app. It can perform many operations: helps you bundle your resources. watches for changes and re-runs the tasks.

### devDependenices vs dependencies
- devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.