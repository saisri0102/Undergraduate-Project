// declare the properties within the object passed inside { } in any order
function ajax( { url, method, data, onSuccess, onError } ) {
    // const url = options.url;
    // const method = options.method;
    // const onSuccess = options.onSucces;
    // const onError = option.onError;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener( 'readystatechange', function() {
        if( xhr.readyState === 4 ) {
            if( xhr.status >= 200 && xhr.status < 300 ) {
                onSuccess( xhr.responseText );
            } else if( xhr.status >= 400 ) {
                onError( xhr.statusText );
            }
        }
    });

    xhr.open( method, url, true );

    if( method === 'GET' ) {
        xhr.send();
    } else {
        xhr.setRequestHeader( 'Content-Type', 'application/json' );
        xhr.send( JSON.stringify( data ) ); // stringify converts JavaScript objects into strings.
    }
}