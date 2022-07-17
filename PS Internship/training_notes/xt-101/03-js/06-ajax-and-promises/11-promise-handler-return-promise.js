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

sum( 12, 13 ) // promise1
    .then(function( result1 ) {
        console.log( 'result1 = ', result1 );
        
        // if a promise is returned here (promise-a), then promise2 resolves / rejects based on this very promise (promise-a)
        return sum( result1, 14 ); // promise-a resolves with 39
    }) // promise2 (will resolve / reject after the function passed to then() executes). promise2 also resolves with 39
    .then(function( result2 ) {
        console.log( 'result2 = ', result2 );
    }) // promise3
    .catch(function( err ) {
        console.log( 'err = ', err );
    }); // promise4