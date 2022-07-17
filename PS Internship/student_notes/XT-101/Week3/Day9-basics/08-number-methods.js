// use singular or double quote for strings (any one )
let strQuantity = '8';
console.log(typeof strQuantity);  // String
let quantity= parseInt(strQuantity);
console.log(typeof quantity);  // Number

let base= '100';
let baseint= parseInt(base,10); // Default base is 10 
let basebinary= parseInt(base,2); // output: 4
console.log(baseint);
console.log(basebinary);

// parseFloat

let distanceToSchool= '2.5';

console.log(parseInt(distanceToSchool)); // Includes only interger part

console.log(parseFloat(distanceToSchool));

console.log(1/0);  // Output: Infinity  Number.POSITIVE_INFINITY 
console.log(0/0);  // Output: NaN (Not a number)
console.log(-1/0); // Number.NEGATIVE_INFINITY -Infinity
console.log(1/0 == Number.POSITIVE_INFINITY) // True
console.log(1==1); //true
console.log('a'=='a'); //true
console.log(NaN== NaN); //false
console.log(NaN!=NaN); //true

console.log(0/0 == NaN); //false NaN s are not comparable

// How to check if some operation is NaN?? 
// Ans: 1. isNaN() 2. Number.isNaN()
console.log(isNaN(0 / 0)); // true;
console.log(isNaN(1 /2)); //false

