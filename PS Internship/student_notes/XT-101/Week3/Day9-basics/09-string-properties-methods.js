const greeting='Good Morning';

// some old browsers do not support [] on string
console.log(greeting[5]); // can safely use this instead charAt()
 

// old browsers support charAt()
console.log(greeting.charAt(5)); // (new String(greeting)).charAt(5);

console.log(typeof greeting[5]); // string

console.log(greeting.length); // No of characters in string = 12

// String Concatenation
let name ='John';
const greetingForJohn= greeting + ' ' + name;
console.log(greetingForJohn);
