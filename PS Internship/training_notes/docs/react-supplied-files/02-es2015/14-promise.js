function add( x, y ) {
    const asyncTask = ( resolve, reject ) => {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            reject( new Error( 'expected numbers as input' ) );
            return;
        }
        let result = x + y;
        resolve( result ); // when the result of the async opertion is available, call resolve and pass it the result
    };

    return new Promise( asyncTask );
}

// Step 1: Call add() to get a promise. 
// Add 2 resolve handlers, one returning the square of the result it gets, and another pinting the result.
// Add a rejection handler that prints the error message

// Step 2: Set up 3 add() calls to be called serially