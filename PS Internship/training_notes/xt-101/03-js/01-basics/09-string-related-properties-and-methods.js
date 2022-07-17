const greeting = 'Good morning';

// some old browsers do not support [] on string
console.log( greeting[5] ); // you can safely use this instead of charAt()

// old browsers support charAt() function
console.log( greeting.charAt( 5 ) ); // (new String( greeting )).charAt( 5 );

console.log( typeof greeting[5] ); // "string"

// length property
console.log( greeting.length ); // number of characters in the string - 12

// string concatenation
const name = 'John';
const greetingForJohn = greeting + ' ' + name;
console.log( greetingForJohn );