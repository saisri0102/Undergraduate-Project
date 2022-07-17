// this function can run into issues when it runs if it does not get expected arguments
const sum = ( x, y ) => x + y;

// problem due to lack to explicit data types
// In a language like Java such errors are caught during compilation
sum( true, false );

// TypeScript (TS) adds data types
// Compilation : xyz.ts -> xyz.js
// During compilation, errors are reported
// We includes *.js files in the web pages

export {}