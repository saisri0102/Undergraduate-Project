function sumAsync( x, y, callback ) {
    // setTimeout is non-blocking function
    // setTimeout() only makes a request to the Node.js to execute the function after 3 seconds
    setTimeout(function() {
        callback( x + y );
    }, 3000);
    // return undefined;
};

function doSomething( result ) {
    // oh no, I need the result :(
    console.log( result );
}

function doSomethingElse( result ) {
    // oh no, I need the result :(
    console.log( 'The result = ', result );
}

sumAsync( 12, 13, doSomething ); // print the plain result
sumAsync( 12, 13, doSomethingElse ); // print with "result = "

