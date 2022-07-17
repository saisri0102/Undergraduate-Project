// DONE

const arr = [ 1, 2, 3 ];
// arr = [ 1, 2, 3, 4, 5, 6 ] // error
arr.push( 4, 5, 6 );

console.log( arr );

// const object can be modified

// ok!
var x = 1;
var x = 2; // treated like an assigment

console.log( x );

let y = 3; // let / const variables do not allow redeclaration
var y = 4;