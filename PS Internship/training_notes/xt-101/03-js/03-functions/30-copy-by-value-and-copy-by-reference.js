// primitives are copied by value - number, boolean, string, undefined
let quantity = 100;
let qty = quantity; // copy by value

qty++; // does not affect quantity

console.log( quantity );
console.log( qty );

// non-primtives are copied by reference - objects, arrays, functions
let john = {
    name: 'John',
    age: 32
};

let jonathan = john; // jonathan and john both refer to the SAME object in memory

jonathan.age++;

console.log( john ); // john.age would have increased by 1
console.log( jonathan );

let johnny = { // a new object has been created
    name: 'John',
    age: 33
};

johnny.age++;

console.log( john ); // john.age would have increased by 1
console.log( johnny );

const numbers = [ 10, 20, 30, 40 ];
const nums = numbers; // numbers and nums refer to one and the SAME array in memory

nums.push( 50 );

console.log( numbers );
console.log( nums );