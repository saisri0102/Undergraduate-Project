function sum( x, y, cb ) {
    setTimeout(function() {
        cb( x + y );
    }, 3000);

    // return; // undefined is returned
}

// christmas tree (callback hell)
// code readability is poor with callback pattern
sum( 12, 13, function( result1 ) {
    console.log( 'result1 = ', result1 );

    sum( result1, 14, function( result2 ) {
        console.log( 'result2 = ', result2 );

        sum( result2, 15, function( result3 ) {
            console.log( 'result3 = ', result3 );
        });
    });
});

// EXERCISE: Use the same sum() function to add 14 once the previous result is obtained. Then use the same sum() function to add 15 to the new result once the new result is obtained.