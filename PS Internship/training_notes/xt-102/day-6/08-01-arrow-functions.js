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

// simplification in arrow function syntax
const sum4 = ( x, y ) => x + y;
console.log( sum4( 12, 13 ) );


const square = ( x ) => x * x;
console.log( square( 12 ) );

const square2 = x => x * x;
console.log( square( 12 ) );