// a function is an object in JS
// a function is created by a constructor function called Function
function sum( x, y ) {
    return x + y;
}

const sum2 = new Function( 'x', 'y', 'return x + y;' );
console.log( sum2( 12, 13 ) );