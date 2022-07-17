var x = 1;

console.log( 'x (global space) = ', x );

function outer() {
    var y = 2;
    console.log( 'x (outer function space) = ', x );
    console.log( 'y (outer function space) = ', y );

    // EXERCISE: check what is logged for z!
    function inner3() {
        console.log( 'x (inner3 function space) = ', x );
        console.log( 'y (inner3 function space) = ', y );
        console.log( 'z (inner3 function space) = ', z );
    }

    inner3();

    if( true ) {
        var z = 3; // var variables do not have block scope - they do have function scope
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

// console.log( 'y (global space) = ', y ); // error