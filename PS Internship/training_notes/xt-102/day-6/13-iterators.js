// Iterable in ES2015 - Array, String, Set, Map, arguments object of a function etc..
// These data structures implement the "iterable interface" ([Symbol.iterator]())

// Arrays (array items), Strings (characters), Map (key-value pairs), Set (items) are all iterables
// iterable interface to iterate through them

const numbers = new Set();
numbers.add( 2 );
numbers.add( 5 );
numbers.add( 7 );
numbers.add( 23 );
numbers.add( 7 ); // not added - duplicate
numbers.add( 29 );
numbers.add( 13 );
numbers.add( 5 ); // not added - duplicate

console.log( Array.from( numbers ) );

// for of is used for iterables
// NOTE: for in loop is used for objects (covered earlier)
for( let item of numbers ) {
    console.log( item );
}

for( let c of 'Hello world' ) {
    console.log( c );
}