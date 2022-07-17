const emptyArray = [ ];
const primes = [ 2, 3, 5, 7, 11, 'Thirteen', false, [ 17, 19 ] ];

console.log( primes[0] );
console.log( primes[5] );
console.log( primes[6] );
console.log( primes[7] );
console.log( primes[7][0] ); // first item within the array [ 17, 19 ]
console.log( primes[8] ); // undefined

primes[0] = 'Two';
primes[5] = 13;
primes[8] = 23;
primes[12] = 37;

primes[1] = primes[2] + primes[3];

console.log( primes ); // items at index 9 - 11 are empty

console.clear();
console.log( primes.length ); // 13

// const variable -> hence assignment is NOT allowed
// error!
// primes = [ 1, 2, 3, 4 ];

const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6, 7, 8, 9, 10 ], // ok
    [ 7, 8, 9 ]
];

console.log( matrix[1][2] ); // 6