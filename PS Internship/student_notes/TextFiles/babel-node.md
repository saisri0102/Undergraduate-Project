Babel-node
- Interpretter 

Reference : babeljs.io

### Step 1

- Installing babel-node
- npm i babel-node
- npm i @babel/core @babel/cli --save-dev
- npm i @babel/preset-env --save-dev
- npm i --save-dev @babel/plugin-proposal-class-properties
- @babel/cli - to run compiler from command line
- @babel/preset-env teaches babel to understand es2015
- 

### Step 2
 
- build:js : "babel" /input_folder_name -d /output_folder_name --out-file-extension .common.js
- you can give output folder for test as same as input folder 
- Now use these common.js fro testing (since jset is node js based so our coomon.js files are node js based syntax )


### Step 3 
- Create .babelrc - in root folder( Project folder)
- Include plugins, presets that we installed in this file

### Step 4

- To run Babel
- ./node_modules/.bin/babel /input_path_file  


## Webpack 

### Step 1

Webpack
- npm i webpack webpack-cli css-loader style-loader sass-loader babel-loader @babel/plugin-transform-regenerator @babel/plugin-transform-runtime --save-dev

### Step 2

- Create webpack.config.js




