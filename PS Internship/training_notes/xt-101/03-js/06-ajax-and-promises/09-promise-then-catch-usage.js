// Promise is a trusted 3rd party for caller of an async function, and the async function communicate
// Promise is generated synschronously
// initially promise object will be in unfulfilled state. From there it goes to either
    // - resolved (succes)
    // - rejected (failure)
// promise objects have 2 important methods
    // - then()
    // - catch()
function sum( x, y ) {
    const promise = new Promise(function( resolve, reject ) {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            // tell the generated promise object about the error
            reject( new Error( 'Both arguments must be numbers' ) );
            return;
        }

        setTimeout(function() {
            const result = x + y;
            // tell the generated promise object about the result
            resolve( result );
        }, 3000);
    });

    return promise;
}

// promise1.then( ... ); // returns promise2
// if promise1 resolves, promise2 will also resolve
// if promise1 reject, promise2 will also reject
sum( 12, 13 ) // promise1
    .then(function( result1 ) {
        console.log( 'result1 = ', result1 );
    }) // promise2
    .catch(function( err ) {
        console.log( 'err = ', err );
    }); // promise3

sum( 12, 'hello' ) // promise1
    .then(function( result1 ) {
        console.log( 'result1 = ', result1 );
    }) // promise2
    .catch(function( err ) {
        console.log( 'err = ', err );
    }); // promise3