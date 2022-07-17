// enable strict mode of execution
'use strict';
x = 1;

console.log( 'x (global space) = ', x );

function outer() {
    // 'use strict'; // not required - it has been enabled globally

    y = 2; // global
    console.log( 'x (outer function space) = ', x );
    console.log( 'y (outer function space) = ', y );

    if( true ) {
        z = 3; // global
        console.log( 'x (block space) = ', x );
        console.log( 'y (block space) = ', y );
        console.log( 'z (block space) = ', z );

        function inner1() {
            console.log( 'x (inner1 function space) = ', x );
            console.log( 'y (inner1 function space) = ', y );
            console.log( 'z (inner1 function space) = ', z );
        }
    
        inner1();
    }

    // console.log( 'z (outer function space) = ', z ); // error

    function inner2() {
        console.log( 'x (inner2 function space) = ', x );
        console.log( 'y (inner2 function space) = ', y );
        console.log( 'z (inner2 function space) = ', z );
    }

    inner2();
}

outer();

console.log( 'x (global space) = ', x );
console.log( 'y (global space) = ', y ); // no error
console.log( 'z (global space) = ', z ); // no error