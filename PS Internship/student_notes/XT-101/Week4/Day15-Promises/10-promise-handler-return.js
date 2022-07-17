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
    
    sum( 12, 13 ) // promise1
        .then(function( result1 ) {
            console.log( 'result1 = ', result1 ); //  result1 =  25 (prints after 3sec due to settimeout)
            return 100;  // this is of type promise
        }) // promise2 (will resolve / reject after the function passed to then() executes)
        .then(function( result2 ) {
            console.log( 'result2 = ', result2 ); // result2 =  100 (prints immediately)
        }) // promise3
        .catch(function( err ) {
            console.log( 'err = ', err );
        }); // promise4
    
    sum( 12, 'hello' ) // promise1 As it throws reject so it directly goes to catch block
        .then(function( result1 ) {
            console.log( 'result1 = ', result1 );
            return 100;
        }) // promise2 (will resolve / reject after the function passed to then() executes)
        .then(function( result2 ) {
            console.log( 'result2 = ', result2 );
        }) // promise3
        .catch(function( err ) {
            console.log( 'err = ', err );
        }); // promise4