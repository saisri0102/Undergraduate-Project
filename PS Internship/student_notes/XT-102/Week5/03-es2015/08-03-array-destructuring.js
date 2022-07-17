const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// people (developers) are lazy

// tedious way
// const first = weekdays[0], second = weekdays[1], fifth = weekdays[4];

// shortcut syntax
const [ first = 'Holiday', second, , , fifth, sixth = 'Holiday' ] = weekdays;

console.log( first, second, fifth, sixth );

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2


// Default values
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

// swapping variables

var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

// parsing values returned from function

function f() {
    return [1, 2];
  }
  
  let a, b;
  [a, b] = f();
  console.log(a); // 1
  console.log(b); // 2

  // Ignoring some values

  function f() {
    return [1, 2, 3];
  }
  
  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3
  
  const [c] = f();
  console.log(c); // 1

  // ASSIGNING Rest of the values to varibale
  const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]