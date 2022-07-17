// Traditionally the variable exported by lodash is imported with the name "_"
// Reference: https://lodash.com/docs/4.17.15

// For both built-in (url, http, etc.), and external modules, we need to specify ONLY the name of the package (absolute path)
// For external modules, Node.js will look for the module inside node_modules/
const lodash = require( 'lodash/array' );

console.log( lodash.difference( [2, 1], [2, 3] ) );