// "Functions are first-class citizens"
// "Functions can be used wherever objects can be used"

function f( x ) {
    console.log( 'i am f' );
    console.log( 'x = ' );

    if( typeof x === 'function' ) {
        console.dir( x );
        x(); // ok?? what will it print?
    } else {
        console.log( x );
    }
}

function g() {
    console.log( 'i am g' );
}

function h() {
    console.log( 'i am h' );
}

const john = {
    name: 'John'
}

f( john ); // x = john

// Of course, why not?! this is possible - functions are also objects.
f( g ); // x = g; // x and g refer to the SAME function in memory

f( h ); // x = h;

f(
    function() {
        console.log( 'i am an anonymous function' );
    }
);