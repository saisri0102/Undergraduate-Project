
/*
    23. Given the following snippet of code, solve the questions that follow.
    ```
    var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
    ```
    * Sort the numbers in the array in increasing order and print the array
    * Sort the array in decreasing order and print the array
    * Add the number 37 to the end of the array using push()
    * Remove the last 2 numbers in the array
    * Remove the numbers at indices 3, 4 (i.e. the 4th and 5th numbers) and insert the strings 'Seven'
    and 'Eleven' in their place.
    * Use indexOf() to check if 23 belongs to the array or not. Also, check if 41 belongs to the array
    or not.
*/
var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];

//Ascending order

numbers.sort(function(x,y){  // This function is same as above 
    return x-y;
});

console.log(numbers); // [2,3,5,7,11,13,17,19,23,29,31]

numbers.sort(function(x,y){  // This function is same as above 
    return y-x;
});

console.log(numbers) // [31,29,23,19,17,13,11,7,5,3,2]

var ln1= numbers.push(37); // Gives updated string length
console.log(ln1); // 12
console.log(numbers); // [31,29,23,19,17,13,11,7,5,3,2,37]


var removedItem1= numbers.pop(); // returns deleted value
console.log(removedItem1); //  37
console.log(numbers);  // [31,29,23,19,17,13,11,7,5,3,2]

var removedItem2= numbers.pop(); // returns deleted value
console.log(removedItem2); //  2
console.log(numbers);  // [31,29,23,19,17,13,11,7,5,3]

console.log(numbers.splice(3,2,"Seven","Eleven"))

var presentOrNot = numbers.indexOf(23)!=-1?true:false;
console.log(presentOrNot);  // true

var presentOrNot = numbers.indexOf(41)!=-1?true:false;
console.log(presentOrNot); // false

