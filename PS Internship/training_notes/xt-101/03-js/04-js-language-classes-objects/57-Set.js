// Unlike array, set has no duplicates
const numbers = new Set();
numbers.add( 2 );
numbers.add( 5 );
numbers.add( 7 );
numbers.add( 23 );
numbers.add( 7 ); // not added - duplicate
numbers.add( 29 );
numbers.add( 13 );
numbers.add( 5 ); // not added - duplicate

console.log( numbers.size ); // 6, not 8