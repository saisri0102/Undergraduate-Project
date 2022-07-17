/**
 * Disadvantages of variables declared with var
 */
// 1. They are not confined to the block in which they are declared (rather function within which they are declared / or global)
function foo() {
    if( true ) {
        var x = 1000; // scoped to foo function (and not this block alone)
    }
    console.log( x );
}
foo();

{
    var x = 1; // a global variable
    console.log( x );
}
console.log( x );

// --------------------------------------------

// 2. Redeclaration is possible
var y = 1;
console.log( y );
var y = 10;
console.log( y );

// --------------------------------------------

// 3. They are hoisted - hoisting is a source of confusion
console.log( z ); // undefined
var z = 100;
console.log( z ); // 100

// --------------------------------------------

// 4. Global variables, created using var, are created as properties on the window object
// Left for self-exploration