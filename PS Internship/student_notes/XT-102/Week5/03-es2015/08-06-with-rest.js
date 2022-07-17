// Returns the sum of all numbers passed to it
// rest parameter
function sum1( ...args ) {
    let result = 0;

    for( let argument of arguments ) {
        result += argument;
    }

    return result;
}


console.log( sum1( 1, 2 ) );
console.log( sum1( 1, 2, 3 ) );
console.log( sum1( 1, 2, 3, 4 ) );
console.log( sum1( 1, 2, 3, 4, 5 ) );
console.log( sum1( 1, 2, 3, 4, 5, 6 ) );

function sort( ...args ) { // all arguments are gathered into an arrays
    console.log( args ); // an arrays

    return args.sort(function( x, y ) {
        return x - y;
    });
}

console.log( sort( 5, 9, 10, 12, 3 ) );