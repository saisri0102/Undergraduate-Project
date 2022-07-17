"use strict";
/**
 * Write a function filter() that accepts an array and another function f (which returns a boolean
value). The filter function should work like so.
```
function isOdd( x ) {
 return x % 2 === 1;
}
let filteredList = filter( [ 1, 2, 3, 4, 5, 6, 7, 8 ], isOdd ); // [ 1, 3, 5, 7 ]
 */
function filter(array, cb) {
    var output = [];
    for (var item in array) {
        if (cb(array[item]) === true) {
            output.push(array[item]);
        }
    }
    return output;
}
function isOdd(x) {
    return x % 2 === 1;
}
console.log(filter([1, 2, 3, 4], isOdd));
