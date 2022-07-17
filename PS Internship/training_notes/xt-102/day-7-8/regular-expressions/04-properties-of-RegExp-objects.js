// + means 1 or more of the preceding character / character class
// NOTE: Execute this in the browser
const numbersPat = new RegExp( '\d+', "ig" );
console.dir( numbersPat );

console.log( numbersPat.ignoreCase ); // true
console.log( numbersPat.global ); // true
console.log( numbersPat.multiline ); // false