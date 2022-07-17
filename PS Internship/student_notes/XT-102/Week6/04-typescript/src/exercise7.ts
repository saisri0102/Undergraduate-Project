/**
 * Define a function push() that accepts 2 arguments
   
    * first argument is an array of numbers
    * second is either a number or an array of numbers
    If second argument is a number, the function adds the number to the end of the array. If second
    argument is an array of numbers, the items of the array are pushed to the end of the array.
    Your function push() should return the array (first argument it accepts).
    Tip: You may use the spread operator to simplify your logic
 */


// function push(array : number[] , x : number) : number[];
// function push(array : number[] , x: number[] ) : number[];

 function push(array: number[], x: number | number[]){
      if(typeof x === 'number' ){
         array.push(x);
   }
   else{
      for(let i of x){
         array.push(i);
      }
   }
 }




