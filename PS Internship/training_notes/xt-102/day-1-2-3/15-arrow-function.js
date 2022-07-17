// old syntax
function sum1( x, y ) {
    return x + y;
}

const sum2 = function( x, y ) {
    return x + y;
};

// new ES2015 syntax - arrow function
const sum3 = ( x, y ) => {
    return x + y;
};

console.log( sum1( 12, 13 ) );
console.log( sum2( 12, 13 ) );
console.log( sum3( 12, 13 ) );