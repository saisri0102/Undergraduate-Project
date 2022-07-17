// Old syntax #1: Function declaration syntax
function add1( x, y ) {
    return x + y;
}

console.log( add1( 10, 20 ) );

// Old syntax #2: Function expression syntax
let add2 = function( x, y ) {
    return x + y;
};

console.log( add2( 10, 20 ) );

// Step 1: Use the new "arrow function" syntax to define a version of the add function

// Step 2: Use the simplified syntax that applies to function's that have a single line (return) statement, to define, more simply, the add function

// Step 3: Use the (further) simplified syntax for function's with a single parameter, to define a square function