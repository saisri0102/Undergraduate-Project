function sum( x, y, callbackFn ) {
    setTimeout(function() {
        console.log( 'i am the inner function' );
        callbackFn( x + y ); // used instead of returning (returning to Node.js is useless)
    }, 3000);

    // return undefined;
}

// I want to get the result and print it out
function cb1( result1 ) {
    console.log( result1 );
}

let result1 = sum( 12, 13, cb1 );

function cb2( result2 ) {
    console.log( result2 * result2 );
}

let result2 = sum( 12, 13, cb2 );