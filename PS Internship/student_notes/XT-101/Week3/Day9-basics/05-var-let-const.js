//upto ES5
var x=1; // x is a number . varaible declaration no explicit data type in JS
console.log(x);
x='Two'; // x is a string . This is ok in JS . Since it wont have exact DT.
console.log(x);

// ES2015 / ES6 (V6 of JS) Let is introduced

let y=1;
console.log(y);
y='Two';
console.log(y);

const z=1; // important to give a value for const initially
console.log(z);
z=2; // ERROR: Re assignment is not allowed for const variables
console.log(z);
z= z+1; //ERROR: Assignment to const variable is not allowed
console.log(z); 
const p;  // Error: Missing initializer for const variable
console.log(p);
