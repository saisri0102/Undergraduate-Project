
// object destructuring 
const john= {
    name: 'John',
    age: 32
}

const{name, age}= john// name= john.name, age= john.age
console.log(name, age);

// array destructuring

const days= ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const[first, second, fourth] = days;
console.log(first, second, fourth);