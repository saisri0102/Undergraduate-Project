var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

days.forEach(function(day){
    console.log(`Day is ${day}`);
});
// Question:

/** Given the following array, solve the questions that follow using appropriate array iterator
methods (forEach, find, filter, map)
```
    var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    * * Print the name of each item in the array
    * Create a new array with the number of letters in each day (example, Sunday has 6 letters). Thus
    the new array that should be generated would be [ 6, 6, 7, 9, 8, 6, 8 ]
    * Create a new array with the days that begin with letters S - Z. Thus the new array that should
    be generated would be [ 'Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday' ]
    * Create a new array with days that have exactly 6 letters. Thus the new array that should be
           generated would be [ 'Sunday', 'Monday', 'Friday' ]
 */

var noOfLetters = [];
days.forEach(function(day){
      noOfLetters.push(day.length);
});
console.log(noOfLetters);

var newArray = days.filter(function(day){
      return (day.charAt(0)>='S' && day.charAt(0)<='Z')
});
console.log(newArray);

var DayOfLength6 = days.filter(function(day){
    return day.length===6;
});
console.log(DayOfLength6);

