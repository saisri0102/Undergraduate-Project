/**
 * Write a function squareEach() that creates a new array with squares of numbers in a supplied
array, and returns it. Type the function separately and assign the type to the function.
```
let result = squareEach( [ 1, 2, 3, 4 ] );
console.log( result ); // [ 1, 4, 9, 16 ]
 */

const squareEach : (array: number[]) => number[] = function(array){
    let sum : number[]=[];
    for(let x in array){
        sum.push(array[x]*array[x]);
    }
   return sum;

}

let result2 = squareEach([1,2,3,4]);
console.log(result2);
