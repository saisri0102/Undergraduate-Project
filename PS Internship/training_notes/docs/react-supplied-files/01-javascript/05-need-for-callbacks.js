function add( x, y ) {
    setTimeout(function() {
        return x + y;
    }, 2000);
}

// Step 1: Execute and verify that result is not what we intend
let result = add( 10, 20 );
console.log( result );

// Step 2: Have sum accept a callback, and call sum, passing it a callback to work with results