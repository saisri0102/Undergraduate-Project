// when we enclose function within () it is treated as a function expression
// result is NOT a function - it is the result of calling the function
let result = (function sum( x, y ) {
    console.log( 'sum is called' );
    return x + y;
})( 2, 3 );
console.log( result );
// console.log( result( 2, 3 ) ); // error

console.log( sum( 2, 3 ) );