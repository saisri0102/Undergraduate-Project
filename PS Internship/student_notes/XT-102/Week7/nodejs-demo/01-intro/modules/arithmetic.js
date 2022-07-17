console.log('Started executing Arithmetic.js ');

console.log('*** module.exports ***');
console.log(module.exports);
console.log(exports);
console.log(module.exports === exports); // true
// module.exports and exports initially refer to the same object
const add = (x,y) => x+y; // add is private
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

//module.exports.subtract = subtract;

module.exports = {
    subtract,
    multiply,
    divide
}

console.log(module.exports); 

/**
 * {
        subtract: [Function: subtract],
        multiply: [Function: multiply],
        divide: [Function: divide]
    }
 */
console.log(exports); // {}
console.log(module.exports === exports); // false

console.log('Finished executing Arithmetic.js ');
