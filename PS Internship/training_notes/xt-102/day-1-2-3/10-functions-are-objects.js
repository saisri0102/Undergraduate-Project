// new Function()
function foo() {
    console.log( this );
}

// new Object()
const obj = {
    x: 100
};

// Functions ARE objects
// Who creates functions? It is a constructor called "Function"
const bar = new Function( 'x', 'y', 'console.log( "bar ", this );' );
bar();

console.log( foo instanceof Function ); // true
console.log( bar instanceof Function ); // true