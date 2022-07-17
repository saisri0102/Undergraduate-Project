/**
 * Write a function sumArray() that calculates sum of items in an array of numbers and returns
it. Type the function arguments and return value inline.
```
let result = sumArray( [ 1, 2, 3, 4 ] );
console.log( result ); // 10
 */


let sumArray  = (array: number[]) =>{
    let sum=0;
    for(let x in array){
        sum =sum+ array[x];
    }
    return sum;
}

let result = sumArray([1,2,3,4]);
console.log(result);