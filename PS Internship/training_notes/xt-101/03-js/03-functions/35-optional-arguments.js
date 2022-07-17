// ES2015 - default argument values
function greet( message = 'Hello', name = 'World' ) {
    console.log( `${message} ${name}` );
}

greet( 'Good morning', 'John' );
greet( 'Good morning' ); // Good morning World
greet( undefined, 'John' ); // Hello John