const alphabeticData = /^[A-Za-z]+$/;

console.log( alphabeticData.test( 'abcdef' ) ); // true
console.log( alphabeticData.test( 'abc123def' ) ); // false
console.log( alphabeticData.test( 'abc123' ) ); // false
console.log( alphabeticData.test( '123abc' ) ); // false