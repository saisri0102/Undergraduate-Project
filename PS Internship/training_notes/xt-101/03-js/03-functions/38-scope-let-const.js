// let, const variables have exact same rules with respect to scoping
let x = 1;

console.log( 'x (global space) = ', x );

function outer() {
    let y = 2;
    console.log( 'x (outer function space) = ', x );
    console.log( 'y (outer function space) = ', y );

    if( true ) {
        let z = 3;
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
        // console.log( 'z (inner2 function space) = ', z ); // error
    }

    inner2();
}

outer();

// console.log( 'y (global space) = ', y ); // error