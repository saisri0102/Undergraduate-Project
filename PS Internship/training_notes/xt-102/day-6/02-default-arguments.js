function greeting( message = 'Hello', name = 'World' ) {
    console.log( `${message} ${name}!` );
}

greeting( 'Good morning', 'John' );
greeting( 'Good morning' );
greeting( undefined, 'John' );