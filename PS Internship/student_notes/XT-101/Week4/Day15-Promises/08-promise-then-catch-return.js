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
    
    const promise1 = sum( 12, 'hello' );
    
    // to then(), we pass the function to be called when promise is resolved
    // then returns a promise
    const promise2 = promise1.then(function( result1 ) {
        console.log( 'result1 = ', result1 );
    });
    
    // to catch(), we pass the function to be called when promise is rejected
    const promise3 = promise1.catch(function( err ) {
        console.log( 'err = ', err );
    });

    // Promise gets  resolved or rejected and returns value of  type promise
    // when promise is resolved then it go to 'then' and again then will return value of type promise
    // if promise is rejected then it go to 'catch' and again catch will return value of type promise