function c() {
    // try..catch is ok, try..finally is ok, try..catch..finally is ok
    try {
        console.log( 'before call to d' );
        d();
        console.log( 'after call to d' );
    } catch( err ) {
        console.log( err.message );
        console.log( err.stack );
        return; // finally still executes
    } finally {
        console.log( 'finally' ); // executes even if we return from try / catch
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