const numbers = [
    2,18,15,18,12, 300, 200
];

// Array.includes - Newer method

console.log(numbers.includes(15)); // true
console.log(numbers.includes(19)); // false

// indexOf() - Older Method

console.log(numbers.indexOf(15)) // 2
console.log(numbers.indexOf(19)) // -1

// lastIndexOf()

console.log(numbers.lastIndexOf(18)) // 3

// Add to an array (push - adds to the end of the array)

numbers.push(450);
console.log(numbers); // 

// pop - Delete last element

numbers.pop();
console.log(numbers);

// Similarly check shift(), unshift

// unshift() - [Add to the beginning of the array]
// The unshift() method adds new items to the beginning of an array, and returns the new length.

var ln= numbers.unshift(50,600);
console.log('Length: ',ln); // 9
console.log(numbers);  // [50,600,2,18,15,18,12,300,200]

// shift() - [removes from the start] -  The return value of the shift method is the removed item.

var removedItem = numbers.shift();
console.log('removed:', removedItem);  // 50   9866715725
console.log(numbers) // [600,2,18,15,18,12,300,200]

// slice(startindex, endindex) - returns the elements (new array) from start index to endindex-1
// adds/removes items to/from an array, and returns the removed item(s).

var numbers2= numbers.slice(2,5);
console.log('Numbers2 Array:', numbers2); // Numbers2 Array: [ 15, 18, 12 ]
console.log(numbers.slice(2,5));  // [ 15, 18, 12 ]

// splice()- generalization of push, pop, shift, unshift

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // At position 2, add the new items, and remove 0 item:

console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

fruits.splice(2,2,"cheeku", "grapes") // At position 2, add the new items, and remove 2 items:

console.log(fruits); // ['Banana', 'Orange' , 'cheeku', 'grapes', 'Apple', 'Mango']

fruits.splice(2, 2); // Removes 2 items from position 2
console.log(fruits) //  [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// toString()

console.log(fruits.join(" * ")) // Banana*Orange*Apple*Mango
var arrayString = fruits.toString();
console.log(arrayString); // Banana,Orange,Apple,Mango

// Array.reverse(); - 

numbers.reverse();
console.log(numbers); // [200,300, 12,18,15,18,2]

// sort - Works good for alphabetical ordering of strings

numbers.sort();
console.log(numbers); // [12,15,18,18,2,200,300] - Sort based on first digit

numbers.sort( function(x,y){
     if(x<y){
         return -1; // x should come before
     }
     if(x>y){
         return 1; // x should come after
     }
       
     return 0;
});

console.log(numbers); //  [2,12,15,18,18,200,300

numbers.sort(function(x,y){  // This function is same as above 
    return x-y;
});

console.log(numbers); //  [2,12,15,18,18,200,300]

// delete items

delete numbers[0];

//  finding max element in array
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }



 



