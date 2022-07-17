// "Functions are first-class citizens"
// "Functions can be used wherever objects can be used"

function f( x ) {
    const john = { // local variable
        name: 'John'
    };

    function g() { // local function
        console.log( 'i am g' );
    }

    // return john; // yes - we can return objects
    return g; // yes - we can return objects - therefore functions
}

// error
// g(); // error (it is local to f)

const x = f(); // x = g;
console.log( x ); 

x(); // prints "i am g"

function p() {
    return function() {
        console.log( 'i am an anonymous function returned from p' );
    };
}

// call p to get a function, then call that function
p()();