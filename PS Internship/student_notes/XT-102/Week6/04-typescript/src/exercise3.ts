/**
 * Write a function contains() that accepts an array that can have any primitive value, and another
primitive value as the second argument, and returns true if the second argument appears in
the array, and false otherwise.
```
console.log( contains( [ 1, 'hello', 3, true ], 3 ) ); // prints true
console.log( contains( [ 1, 'hello', 3, true ], 5 ) ); // prints false

 */

 function contains(array: any [], x: any){
     let isContains = false;
     
        for(let item in array){
          
            if(array[item] === x){
                isContains=true;
                break;
            }
            
        }
        return isContains;
 }

 console.log( contains( [ 1, 'hello', 3, true ], 3 ) ); 
console.log( contains( [ 1, 'hello', 3, true ], 5 ) ); 

 

