## Setting up and using ESLint
- Install ESLint
```
npm i --save-dev eslint
```  

- Since we are setting up ESLint for linting TypeScript files as well, we need to install the following (not required if we choose to lint only for JavaScript files in the next step).
```
npm i typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
__NOTE__: The last 2 packages will be installed in the next step, but we can do it anyway in this step itself.  

- Create the ESLint configuration file. Choose Browser environment, style guide (AirBNB), include TypeScript support, choose JSON format for the file.
```
./node_modules/.bin/eslint --init
```
__NOTE__: Use backslashes on Windows  

- Create a _.eslintignore_ file. Make sure to ignore all code except the ones you created as part of the app (ignore node_modules, Font Awesome folder, libs folder, dist folder etc.)  
__Reference__: Check https://eslint.org/docs/user-guide/configuring/ignoring-code#ignorepatterns-in-config-files for file path patterns (glob patterns) to specify files and folders to ignore  

- Add a lint script to package.json. Also add one to automatically fix where possible the lint issues
```
"scripts" : {
    "lint": "eslint . --ext .js",
    "lint:fix": "eslint . --ext .js --fix"
}
```  

- Run ESLint
```
npm run lint
```  

Make necessary changes to the _rules_ section in _.eslintrc.json_ file as per your team's standards.

&copy; Prashanth Puranik, 2021, www.digdeeper.in