// object destructuring
const john = {
    name: 'John',
    age: 32
}

const { name, age } = john; // name = john.name, age = john.age
console.log( name, age );

// array destructuring
const numbers = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ];
const [ first, second, , fourth ] = numbers;
console.log( first, second, fourth );