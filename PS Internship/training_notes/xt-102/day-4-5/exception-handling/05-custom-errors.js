// no one "catches" the error
function sum( x, y ) {
    if( typeof x !== 'number' || typeof y !== 'number' ) {
        throw new Error( 'both arguments must be numbers' );
    }

    return x + y;
}

console.log( 'result = ', sum( 12, 13 ) );
console.log( 'result = ', sum( 'hello', 13 ) );

console.log( 'the end' ); // does not execute