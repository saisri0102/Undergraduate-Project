const primes= [2,3,5,7,11, 'Thirteen', false, [17, 19]]; // Declaration of array
const emptyArray = [ ]; 

console.log(primes[0]);
console.log(primes[5]);
console.log(primes[6]);
console.log(primes[7]); // [17,19]
console.log(primes[7][0]); // First item within the array [17,19]
console.log(primes[8]); // undefined

primes[0]='Two';
primes[5]=13;
console.log(primes);
primes[8]=23;
console.log(primes);
primes[12]= 37;
console.log(primes); // [ 'Two', 3, 5, 7, 11, 13, false, [ 17, 19 ], 23, <3 empty items>, 37 ]

primes[1]= primes[2] + primes[3];
console.log(primes);  // [ 'Two', 12, 5, 7, 11, 13, false, [ 17, 19 ], 23, <3 empty items>, 37 ]
console.log(primes.length); //13 

// const allows to change internal values of compositive variables
// we cant assign to const variable

//primes= [1,2,3,4,5] // Not allowed but can change individual values

const matrix = [
    [1,2,3],
    [4,5,6,7,8,9], // this works fine 
    [7,8,9]
];
console.log(matrix); // [ [ 1, 2, 3 ], [ 4, 5, 6, 7, 8, 9 ], [ 7, 8, 9 ] ]
