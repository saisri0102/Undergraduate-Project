// upto ES5
var x = 1; // x is a number
console.log( x );

x = 'Two'; // ok - x is a string
console.log( x );

// ES2015 / ES6 (v6 of JS)
let y = 1;
console.log( y );

y = 'Two';
console.log( y );

const z = 1;
console.log( z );

// error
// z = 2; // reassignment is not allowed for const variables
// console.log( z );

// error - missing initializer for const variable
// const a;
// console.log( a );

// error - assignment to const variable not allowed
z = z + 1;
console.log( z );

const PI = 3.142;
console.log( PI * r * r );
console.log( PI * 2 * r );