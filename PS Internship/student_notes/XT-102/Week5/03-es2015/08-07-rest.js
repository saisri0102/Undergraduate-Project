// rest operator (...) can be used only on the last parameter
function foo( x, ...y ) {
    console.log( x );
    console.log( y ); // y holds the "rest" of the arguments
}

foo( 1, 2, 3, 4, 5 ); // x = 1, y = [ 2, 3, 4, 5 ]
foo( 1, 2, 3 ); // x = 1, y = [ 2, 3 ]
foo( 1, 2 ); // x = 1, y = [ 2 ]
foo( 1 ); // x = 1, y = [ ]
foo(); // x = undefined, y = [ ]