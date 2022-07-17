let strQuantity = '100';
console.log( typeof strQuantity );

let quantity = parseInt( strQuantity, 10 ); // default is base 10
let quantityReadAsBinary = parseInt( strQuantity, 2 ); // default is base 10
console.log( quantity );
console.log( quantityReadAsBinary );
console.log( typeof quantity );

let distanceOfSchool = '2.5';
console.log( parseInt( distanceOfSchool ) ); // type is number - but includes ONLY integer part
console.log( parseFloat( distanceOfSchool ) ); // type is number - but includes entire value

console.log( 1 / 0 ); // Number.POSITIVE_INFINITY (Infinity)
console.log( 0 / 0 ); // NaN (Not a Number)
console.log( -1 / 0 ); // Number.NEGATIVE_INFINITY (-Infinity)

// NaN is the ONLY value in JS which is not considered equal to itself
console.log( 1 == 1 ); // true
console.log( 'a' == 'a' ); // true

console.log( NaN == NaN ); // false
console.log( NaN != NaN ); // true
console.log( 0 / 0 == NaN ); // false - how to check if some operation in NaN value

console.clear();

console.log( isNaN( 0 / 0 ) ); // true (isNaN() alternative Number.isNaN())
console.log( isNaN( 1 / 2 ) ); // false