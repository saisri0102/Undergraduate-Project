// Traditionally the variable exported bt lodash is imported with the name "_"

// For both built-in (url, http etc. ), and external modules, we need to specify ONLY the name of the package 

// For external modules, Node.js will look for the module inside node_modules/
const lodash = require('lodash'); 
console.log(lodash.difference([2,1], [2,3]));
