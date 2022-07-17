// Primitive wrappers works even without "new" - they will create the object anyway
let greeting = 'Good morning'; // primitive
const greetingObj = new String( greeting ); // object

// startIndex, numChars
console.log( greetingObj.substr( 5, 6 ) ); // mornin

// EXERCISE: substring()

// using the primitive value - still works
// internally this creates a temporary String object
greeting.substr( 5, 6 );

// invoking without "new" operator - still works
const greetingObj2 = String( greeting );
console.log( greetingObj2.substr( 5, 6 ) ); // mornin

// greetingObj -> primtive string
console.log( greetingObj ); // object
console.log( greetingObj.valueOf() ); // primitive value that it stores

// EXERCISE: 
// indexOf()
// toLowerCase(), toUpperCase()
// replace() // does it change the original string ? - NO
// includes()
// Q.26 in JS Lab Guide (ES5 and Earlier)

greeting = greeting.replace( 'morning', 'evening' );
console.log( greeting );