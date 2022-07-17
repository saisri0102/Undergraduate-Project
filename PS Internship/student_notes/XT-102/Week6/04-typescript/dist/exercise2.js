"use strict";
/**
 * Write a function squareEach() that creates a new array with squares of numbers in a supplied
array, and returns it. Type the function separately and assign the type to the function.
```
let result = squareEach( [ 1, 2, 3, 4 ] );
console.log( result ); // [ 1, 4, 9, 16 ]
 */
var squareEach = function (array) {
    var sum = [];
    for (var x_1 in array) {
        sum.push(array[x_1] * array[x_1]);
    }
    return sum;
};
var result2 = squareEach([1, 2, 3, 4]);
console.log(result2);
