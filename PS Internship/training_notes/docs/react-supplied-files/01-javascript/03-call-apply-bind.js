function foo( x, y ) {
    console.log( 'foo call context = ', this );
    console.log( x, y );
}

// Step 1: Execute and check the output (preferably in browser console)
foo( 12, 13 );

// Step 2: Use call to change the context

// --------------------------------------------

// Step 3: Use bind() to create another function which calls foo, but with context set to 'hello'

// Step 4: Use bind() to create another function which calls foo, but with context set to 'hello', and x set to 100

// --------------------------------------------

// Self-exploration: apply() works similar to call() but has the advantage that the arguments to be passed can be constructed dynamically (as part of an array)