/**
 * 6. Write a function exponentFactory that accepts a number, say x. 
 Define 2 functions square and
cube within it (which accept a number each, and return the square and cube respectively). If x
is 2, exponentFactory returns the square function, if 3 it returns the cube function. For any
other input it returns a function that returns the number it accepts as such. Call the
exponentFactory() function and then the returned function, and log the result.
Example:
```
var fn;
fn = exponentFactory( 2 );
console.log( fn( 5 ) ); // prints 25;
fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;
fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;
 */

 function exponentFactory( x: number){
     if(x==2){
         return function square(x: number){
             return x*x;
         };
     }
     else if(x==3){
        return function cube(x: number){
            return x*x*x;
        };
     }
     else{
         return function itSelf(x: number){
             return x;
         }
     }

 }

 var fn;
fn = exponentFactory( 2 );
console.log( fn( 5 ) ); // prints 25;
fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;
fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;