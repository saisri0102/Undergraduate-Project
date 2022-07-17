function sumAsync( x, y, callback ) {
    setTimeout(function() {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            callback( null, new Error( 'both arguments must be number' ) );
            return;
        }

        callback( x + y, null );
    }, 3000);
};

function doSomething( result/*, error */ ) {
    // if( error ) {
    //     console.log( error.message );
    //     return;
    // }

    console.log( result );
}

sumAsync( 12, 'hello', doSomething );
