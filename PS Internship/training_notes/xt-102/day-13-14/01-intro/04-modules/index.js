console.log( 'started executing index.js' );

// the arithmetic.js is executed at this point

// const Arth = require( './arithmetic' );
const { add, subtract, multiply } = require( './arithmetic' );
// importing the SAME module again will NOT exceute it again
const { divide } = require( './arithmetic' );

try {
    console.log( add( 12, 13 ) ); // error - we have not exported add - the script stops executing here
} catch( err ) {
    console.log( err.message );
}

console.log( subtract( 12, 13 ) );
console.log( multiply( 12, 13 ) );
console.log( divide( 65, 13 ) );

console.log( 'finished executing index.js' );