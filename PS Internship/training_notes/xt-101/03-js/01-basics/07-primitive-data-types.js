// number (int / float), boolean, string (no char type)
let priceOfPhone = 20000;
let distanceToSchool = 2.5;

console.log( typeof 123 ); // "number"
console.log( typeof priceOfPhone ); // "number"
console.log( typeof distanceToSchool ); // "number"

let greeting = 'Good morning';
let greeting2 = "John said \"Good afternoon\"";


// ES2015 introduces template strings
let name = `John`;
let greeting3 = `Good morning ${name}`;
let greeting4 = 'Good morning ${name}';
let greeting5 = 'Good morning ' + name;
console.log( greeting3 );
console.log( greeting4 );
console.log( greeting5 );


let isCold = true; // or false
console.log( typeof isCold );

console.log( greeting );
console.log( greeting2 );

console.log( typeof greeting ); // "string"

console.log( typeof typeof 1 ); // "string"
