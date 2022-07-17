// Closure - the set of variables that a function can access

// x, y, g, obj (b is a method)
// In the closure of f, there are the variables - x, y, g, obj, any other global variables
function f( x ) {
    let y = 2;

    function g() {
        console.log( x, y );
    }

    return {
        a: g,
        b: function( z ) { // Closure( f ), z, any other global variables
            console.log( x, y );
        }
    };
}

// x1, y1, g1, obj1 (b is a method)
const obj = f( 1 ); // f finished executing here
obj.a(); // 1 2 (the variables of f are still accessible in h/g)
obj.b(); // 1 2

// x2, y2, g2, obj2 (b is a method)
const obj2 = f( 10 );
obj2.a(); // 10 2
obj2.b(); // 10 2