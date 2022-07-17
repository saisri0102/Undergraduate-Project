// apply - arguments to be passed as array
// call- seperate the arguments by , 

function foo( x, y ) {
    console.log( 'this = ', this );
    console.log( 'x = ', x );
    console.log( 'y = ', y );
}

// foo()
// why not call it directly foo() -> because we would like to change the context
const arr = [ 10, 20 ]; // may be constructed when code runs
foo.apply( { x: 100 }, arr );
foo.apply( { x: 100 }, [ 10 ] ); // y -> undefined
foo.apply( { x: 100 } ); // x -> undefined, y -> undefined
foo.apply(); // "this" -> default context (window in browser), x -> undefined, y -> undefined

// no point doing this -> same as foo( 10, 20 )
foo.apply( null, [ 10, 20 ] );

// context is always an object (or undefined)
foo.apply( 10, [ 20, 30 ] ); // new Number( 10 ), 20, 30