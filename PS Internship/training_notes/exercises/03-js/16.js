function sumArray( numbers, transform ) {
    let sum = 0;

    for( let i = 0; i < numbers.length; i++ ) {
        sum += transform( numbers[i] );
    }

    return sum;
}

function square( x ) {
    return x * x;
}

sumArray( [ 12, 13, 14, 15, 16 ], square ); // transform = square
sumArray( [ 12, 13, 14, 15, 16 ], Math.log ); //  transform = Math.log