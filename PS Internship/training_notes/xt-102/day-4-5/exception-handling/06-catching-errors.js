// defining custom error classes
function ArithmeticError( message ) {
    Error.call( this, message );
}

Object.setPrototypeOf( ArithmeticError.prototype, Error.prototype );

// no one "catches" the error
function sum( x, y ) {
    if( typeof x !== 'number' || typeof y !== 'number' ) {
        throw new ArithmeticError( 'both arguments must be numbers' ); // stops execution of sum
    }

    return x + y;
}

function b( x, y ) {
    return sum( x, y ); // not within try :( stops execution of b() after sum() stops
}

function a( x, y ) {
    try {
        const result = b( x, y ); // function a continues execution as this code is within try block
    } catch( err ) {
        if( err instanceof ArithmeticError ) {
            console.log( err.message );
        }
        // } else if( err ... ) {

        // }
    }

    console.log( 'end of a' );
    return result;
}

console.log( 'result = ', a( 'hello', 13 ) );

console.log( 'the end' ); // does not execute