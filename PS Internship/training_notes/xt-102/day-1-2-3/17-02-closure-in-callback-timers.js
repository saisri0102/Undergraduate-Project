function sum( x, y, cb ) {
    setTimeout(function() {
        cb( x + y );
    }, 2000);
}

sum( 12, 13, function( result ) {
    console.log( 'sum = ', result );
});

console.log( 'after call to sum function' );