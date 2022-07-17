let sum = 0;

console.time( 'sumloop' );

for( let i = 1; i <= 3200000; i++ ) {
    sum += i;
}

console.log( 'sum = ', sum );

console.timeEnd( 'sumloop' ); // prints out time for the timed code


console.time( 'sumformula' );

let sum2 = ( 3200000 * 3200001 ) / 2;
console.log( sum2 );

console.timeEnd( 'sumformula' );