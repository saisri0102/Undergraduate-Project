function sum( x, y ) {
    return x + y;
}

// let, const do not allow redeclaration - so using var in this example
var sum = function( x, y ) {
    return x * x + y * y;
};

console.log( sum( 2, 3 ) );

console.clear();

function sum2( x, y ) {
    sum2 = function( x, y ) {
        return x * x +  y * y;
    };
    
    return x + y;
}


console.log( sum2( 2, 3 ) );
console.log( sum2( 2, 3 ) );
console.log( sum2( 2, 3 ) );
console.log( sum2( 2, 3 ) );