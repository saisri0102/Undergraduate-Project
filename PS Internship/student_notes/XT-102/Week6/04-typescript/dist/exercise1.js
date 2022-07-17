"use strict";
/**
 * Write a function sumArray() that calculates sum of items in an array of numbers and returns
it. Type the function arguments and return value inline.
```
let result = sumArray( [ 1, 2, 3, 4 ] );
console.log( result ); // 10
 */
var sumArray = function (array) {
    var sum = 0;
    for (var x_1 in array) {
        sum = sum + array[x_1];
    }
    return sum;
};
var result = sumArray([1, 2, 3, 4]);
console.log(result);
