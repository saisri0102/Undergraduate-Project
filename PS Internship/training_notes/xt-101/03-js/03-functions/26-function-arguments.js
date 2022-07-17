function foo( x, y ) {
    console.log( 'x = ', x );
    console.log( 'y = ', y );

    // arguments object - every functions has access to it arguments through it
    console.log( '*** arguments ***' );
    console.log( arguments );
    console.log( arguments[0] );
    console.log( arguments[1] );
    console.log( arguments[2] );
    console.log( "arguments.length = ", arguments.length ); // actual number of arguments - 3

    for( let i = 0; i < arguments.length; i++ ) {
        console.log( arguments[i] );
    }
}

// we can call a function with less number of argumetns than it expects
foo(); // 0 arguments
foo( 12 ); // x = 12, y = undefined
foo( 12, 13, 14 ); // x = 12, y = 13, what about 14??? cant we use thrird argument in foo function?

