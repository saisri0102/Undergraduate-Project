// Returns the sum of all numbers passed to it
// rest parameter
function sum1() {
    let result = 0;

    // arguments is not an array
    // array is much more convenient than arguments objects
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