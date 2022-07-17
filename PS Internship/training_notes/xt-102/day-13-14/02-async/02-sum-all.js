const http = require( 'http' );

// Write a function that calculates the factorial of a number after 2 seconds and passes the result to a caller in the form of a callback.
function factorial( n, cb ) {
    setTimeout(function() {
        let result = 1;

        for( let curNum = 1; curNum <= n; curNum++ ) {
            result *= curNum;
        }

        cb( result );
    }, 2000);
}

factorial(8, function( result ) {
    console.log( '8! = ', result );
});