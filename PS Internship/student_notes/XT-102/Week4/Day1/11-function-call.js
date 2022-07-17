// foo.call() - used to change the context - Always first argument refer to this 
// call or apply - used to change the context

function foo( x, y ) {
    console.log( 'this = ', this );
    console.log( 'x = ', x );
    console.log( 'y = ', y );
}

// foo()
// why not call it directly foo() -> because we would like to change the context
foo.call( { x: 100 }, 10, 20 );
foo.call( { x: 100 }, 10 ); // y -> undefined
foo.call( { x: 100 } ); // x -> undefined, y -> undefined
foo.call(); // "this" -> default context (window in browser), x -> undefined, y -> undefined

// no point doing this -> same as foo( 10, 20 )
foo.call( null, 10, 20 );

// context is always an object (or undefined)
foo.call( 10, 20, 30 ); // new Number( 10 ), 20, 30