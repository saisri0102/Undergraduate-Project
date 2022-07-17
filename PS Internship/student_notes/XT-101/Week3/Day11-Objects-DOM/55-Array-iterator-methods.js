const employees =[
    {
        name:'john',
        dept:'IT',
        experience: 6
    },
    {
        name:'jane',
        dept:'CSE',
        experience: 3
    },
    {
        name:'Mark',
        dept:'ECE',
        experience: 15
    },
    {
        name:'Mary',
        dept:'Finance',
        experience: 12
    }
];

// do something on each item - forEach

employees.forEach(function(employee , index, employees){ // index, array name is optional 

  employee.bonusShares = employee.experience*10;
   console.log(`${employee.name} works in ${employee.dept} department and has experience of ${employee.experience} `);
   // console.log(index); // prints the index 
   console.log(employees); // prints all the items
});

// Filtering - smaller subset - filter()

const seniorEmployees = employees.filter(function(employee /* , index, array*/){
   return employee.experience>=10;
});

console.log(seniorEmployees);  // since array has objects, the 2 arrays have the same 2 shared objects


// mapping - map() - create new array where every item in the original array has corresponding item in the new array

const employeeNames = employees.map(function(employee){
    return employee.name;
});

console.log(employeeNames);

// reduce - reduce() - method runs a function on each array element to produce (reduce it to) a single value
// method works from left-to-right in the array.

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction); // 99= (45+4+9+16+25)

function myFunction(total, value, index, array) {
  return total + value;
}

// forEach()

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}

// map

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction); 

function myFunction(value, index, array) {
  return value * 2;
}

// every() - returns true if all elements satisfy the given condition
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction); // false (since all elements are not greater than 18)

function myFunction(value, index, array) {
  return value > 18;
}

// some() - method check if some array values pass a test.
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction); // true

function myFunction(value, index, array) {
  return value > 18;
}

// find()

var first = numbers.find(myFunction); // 25( returns immediate number which is greater than 16)

function myFunction(value, index, array) {
  return value > 16;
}