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

// no problem of callback hell
sum( 12, 13 )
    .then(function( result1 ) {
        console.log( 'result1 = ', result1 );
        return sum( result1, 14 );
    })
    .then(function( result2 ) {
        console.log( 'result2 = ', result2 );
        return sum( result2, 15 );
    })
    .then(function( result3 ) {
        console.log( 'result3 = ', result3 );
    })
    .catch(function( err ) {
        console.log( 'err = ', err );
    });