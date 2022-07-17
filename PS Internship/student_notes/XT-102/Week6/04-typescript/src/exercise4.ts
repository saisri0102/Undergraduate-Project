/**
 * Write a function map() that accepts an array as the first argument, and another function as the
    second argument. The second argument is a function that accepts an item of the array and
    returns some value. The map() functions applies the passed function (second argument) on
    each item of the passed array (first argument) in the order they appear in the array, and
    groups the results into an array and returns it.
    ```
    function square( x ) { return x * x };
    www.digdeeper.in © Prashanth Puranik puranik@digdeeper.in
    function cube( x ) { return x * x * x };
    console.log( map( [ 1, 2, 3, 4 ], square ) ); // prints [ 1, 4, 9, 16 ]
    console.log( map( [ 1, 2, 3, 4 ], cube ) ); // prints [ 1, 8, 27, 64 ]

 */

 function map(array : number [], cb : (result : number)  => number){
      let output : number[] = [];
      for(let item in array){
         output.push(cb(array[item]));
      }
      return output;
 }
function square(x: number){
   return x*x;
}
function cube(x: number){
   return x*x*x;
}

console.log( map( [ 1, 2, 3, 4 ], square ) );
console.log( map( [ 1, 2, 3, 4 ], cube ) ); 