// SYNTAX 1

// function declaration syntax
function divide( dividend : number, divisor : number ) : number | string {
    if( dividend !== 0 ) {
        return dividend / divisor;
    } else {
        return 'You cannot have 0 as divisor';
    }
}

// function expression syntax
const sum1 = function( x : number, y : number ) /*: number*/ {
    return x + y;
};

// arrow function syntax
const sum2 = ( x : number, y : number ) /*: number*/ => x + y;

// ----------------
// SYNTAX 2 (Not applicable for function declaration)
type BinaryFunction = ( x : number, y : number ) => number;

const multiply1 : BinaryFunction = function( x, y ) {
    return x * y;
};

const multiply2 : BinaryFunction = ( x, y ) => x * y;

type SumAsyncCallback = ( result : number ) => void

function sumAsync( x : number, y : number, cb : SumAsyncCallback ) {
    setTimeout( () => cb( x + y ), 3000 );
}

// try out some of the functions we defined
sumAsync( 12, 13, result => console.log( result ) );
console.log( divide( 10, 3 ) );

export {}