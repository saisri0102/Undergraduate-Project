// This function can run into issues when it runs if it does not get expected arguments
const sum= (x,y) => x+y;

//problems due to lack of explicit datatype in JS
// In a language like java such errors are caught during compilation
sum(true, false);  

// TypeScript(ts) adds data types
// Compilation : xyz.ts -> xyz.js
//During compilation, errors are reported
// We include *.js files in the web pages
/**
 * 
 * 
 */