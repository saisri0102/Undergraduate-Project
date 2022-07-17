// Callback function / Callback

// setTimeout() accepts
    // 1. a function f
    // 2. time in milliseconds
    // and requests the environment (Node.js / browser) to call f after the given time

// There exists an "event queue" where functions waiting to be executed are queued up

setTimeout(function() { // gets into the "event queue" after 3 seconds
    console.log( 'i am a function x' );
}, 3000);

setTimeout(function() { // gets into the "event queue" after 3 seconds
    console.log( 'i am a function y' );
}, 3000);

// hopefully takes more than 3 seconds
for( let i = 0; i < 10000000; i++ ) {
    if( i % 1000000 === 0 ) {
        console.log( i * 10 / 1000000 + '%' );
    }

    for( let j = 0; j < 1000; j++ ) {
        
    }
}

// approximate idea of fetch function
// fetch( 'https://ww.exapl.com/teams', function( data ) {

// } )