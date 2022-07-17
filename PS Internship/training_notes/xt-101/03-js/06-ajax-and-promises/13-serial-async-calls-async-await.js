function sum( x, y ) {
    const promise = new Promise(function( resolve, reject ) {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            reject( new Error( 'Both arguments must be numbers' ) );
            return;
        }

        setTimeout(function() {
            resolve( x + y );
        }, 3000);
    });

    return promise;
}

// serial async calls are simplefied using async..await
// await keyword can be used only within an async function
// async function can be paused and resumed
// Questions!
    // when does it get paused? - when you await on a promise
    // what happens after that? - control goes back to caller of the async function
    // when does it resume? when the promise on which you are waiting resolves / rejects (subject to runtime being free - if not free then value waits in a queue) - the resolved value is the value of the await statement
async function calculateSerialSums() {
    try {
        console.log( '2. before call to await' );
        const result1 = await sum( 12, 13 ); // the resolved value waits in the queue
        console.log( '3a. after call to await : ', result1 );
        const result2 = await sum( result1, 'hello' ); // the resolved value waits in the queue
        console.log( '3b. after call to await : ', result2 );
        const result3 = await sum( result2, 15 ); // the resolved value waits in the queue
        console.log( '3c. after call to await : ', result3 );
    } catch( err ) {
        console.log( 'err = ', err.message );
    }

    return 1; // what is actually returned is a promise that resolves with value 1
}

console.log( '1. line before call to async function' );

calculateSerialSums()
    .then(function( value ) {
        console.log( 'async function is done : value = ', value );
    });

console.log( '4. line after call to async function' );