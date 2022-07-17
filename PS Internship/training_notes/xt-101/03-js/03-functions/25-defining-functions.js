// "function declaration syntax" functions can be used before their line of declaration
const result1 = sum1( 12, 13 );
console.log( 'result1 = ', result1 );

// Function declaration syntax
function sum1( x, y ) {
    let result;

    result = x + y;

    return result;
}

// Function expression syntax (the RHS is called a "function expression")
// function expression can be 
    // i) named
    // ii) anonymous (unnamed)
// "function expression" functions cannot be used before their line of delcaration
let sum2 = function( x, y ) {
    return x + y;
};

const result2 = sum2( 12, 13 );
console.log( 'result2 = ', result2 );

// arrow function syntax
let sum3 = ( x, y ) => {
    return x + y;
};

const result3 = sum3( 12, 13 );
console.log( 'result3 = ', result3 );