// Step 2: Assign defaults for the 2 function parameters, and check the output again
function greet( message, name ) {
    console.log( `${message} ${name}!` );
}

// Step 1: Check the output
greet( 'Hello', 'John' );
greet( 'Hello' );
greet( );
greet( undefined, 'James' );

// --------------------------------------------

// Self-exploration: You can also call functions within ${}, eg. ${fn()}. The function is called when the string is created and the returned value is used.