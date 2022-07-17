function c() {
    // we are handling the error
    try {
        console.log( 'before call to d' );
        d(); // function call stack is NOT cleared
        console.log( 'after call to d' ); // this will NOT execute
    } catch( err ) { // control comes here
        console.log( err.message );
        console.log( err.stack ); // prints out function call stack
    }

    console.log( 'after try..catch block' );
}

function b() {
    c();
    console.log( 'after call to c (within function b)' );
}

function a() {
    b();
    console.log( 'after call to b (within function a)' );
}

a();
console.log( 'after call to a (within global space)' );