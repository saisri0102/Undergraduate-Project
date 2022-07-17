/**
 * Advantages of variables declared with let
 * Pre-requisite: Disadvantages of variables declared with var
 * 
 * Tip: Use let in place of var
 */
// 1. They have block, function and global scopes (depending on where they are declared)
function foo() {
    let x = 1;
    console.log( x ); // foo-scoped x
}

foo();
// console.log( x ); // global x - error

{ // let variables have block scoping
    let x = 1000;
    console.log( x ); // block-scoped x
}

// console.log( x ); // x is not defined

// --------------------------------------------

// 2. Redeclaration not possible
var y = 1;
let y = 10;

// --------------------------------------------

// 3. They are NOT hoisted
// console.log( z ); // error - cannot use let variables before line of declaration
let z = 100;
console.log( z );

// --------------------------------------------

// 4. Global variables, created using let, are NOT created as properties on the window object
// Left for self-exploration