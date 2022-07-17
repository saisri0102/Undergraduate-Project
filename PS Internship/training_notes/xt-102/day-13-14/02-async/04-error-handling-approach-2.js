function sumAsync( x, y, successCallback, errorCallback ) {
    setTimeout(function() {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            errorCallback( new Error( 'both arguments must be numbers' ) );
            return;
        }

        successCallback( x + y );
    }, 3000);
};

function onSuccess( result ) {
    console.log( result );
}

function onError( error ) {
    console.log( error.message );
}

sumAsync( 12, 'hello', onSuccess, onError );
