// arithmetic operators ( -, * etc.)
let x = 13, y = 24;
console.log( 1 + 2 );
console.log( 13 / 24 ); // 0.5...
console.log( 13 % 7 ); // 6
console.log( 3 ** 4 );
console.log( 3.5 ** 4.5 );

console.clear();

// relational operators ( <, <=, >, >=, ==, !=, ===, !== )
console.log( 1 < 2 );
console.log( 1 == 2 );
console.log( 2 == 1 + 1 );

console.log( 2 == '2' ); // true
console.log( 2 === '2' ); // false // nice!

// !== <=> !( x === y )

// logical operators - !, &&, ||
const isRaining = true, doILikeToGetWet = false;
const shoudlITakeUmbrella = isRaining && !doILikeToGetWet;

console.log( shoudlITakeUmbrella );

console.clear();

// assignment + arithmetic (+ is shown but you can use for other operators as well)
x = x + 10;
x += 10; // same as above

console.log( x );

// increment and decrement (post- pre- increment)
console.log( '***' );

console.log( ++x ); // makes it 34 and prints 34
console.log( x++ ); // prints 34 and makes it 35

console.log( '***' );

console.log( x-- ); // print 35 and then makes it 34
console.log( --x ); // makes it 33 and prints 33

// conditional (?:)
console.log( x > 30 ? 'More than 30' : 'Less than or equal to 30' );

console.clear();

// precedence and associativity of operators
// */, + 
const result = 1 + 2 * 3 / 4; // 2.5

// !, &&, ||
const result2 = true || false && !true || true; // true

console.log( result );
console.log( result2 );