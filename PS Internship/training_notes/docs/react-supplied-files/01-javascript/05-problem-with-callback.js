// 1. Callback hell (Christmas Tree problem)
// Code readability soons goes out-of-hand when serial async tasks involving callbacks are performed
function add( x, y ) {
    setTimeout(function() {
        return x + y;
    }, 2000);
}


add( 12, 13, function( result ) {
    console.log( result );

    // Step 1: Add result and 14, and print that result. Then add that result and 15, and print the result.
});

// Self-exploration: There are other problems
// Refer
// 1. https://changelog.com/jsparty/15
// 2. https://rileygelwicks.gitbooks.io/you-dont-know-js/async%20&%20performance/ch2.html