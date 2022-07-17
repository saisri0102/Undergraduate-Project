console.log( 'arithmetic module started executing' );

console.log( '*** module.exports ***' );
console.log( module.exports ); // initially {}
console.log( exports ); // intially {}
console.log( module.exports === exports ); // true

// we will keep this private
const add = ( x, y ) => x + y;

// we shall export these 3 function
const subtract = ( x, y ) => x - y;
const multiply = ( x, y ) => x * y;
const divide = ( x, y ) => x / y;

// module.exports now refers to a new object
// exports still refers to the old object
module.exports = {
    subtract,
    multiply,
    divide
};

console.log( 'arithmetic module finished executing' );