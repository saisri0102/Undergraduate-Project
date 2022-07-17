/**
 * An object is a collection of properties (key-value pairs)
 *  We can create object in JS without class
 * */
const emptyObject1 = new Object();  // constructor
const emptyObject2= { }; // Object literal syntax

// Keys are always strings in Js(except when it is symbol) so we can use single or double quote
// Value of key can be function also
// Values can be numbers, Objects, boolean, arrays, functions, strings, null, undefined etc

/**
 * Starting of Object {
 * }
 * Seperation of keyvalue pairs is ,
 * seperation of key and value by :
 * accessing use .
 */
const john={
    name: 'John',
    Age: '34', 
    emailIds:[
        'john@example.com',
        'jane@example.com'
    ],
    address:{
        city:'Bangalore',
        pincode: '560101'

    }
};

console.log(john.name);
console.log(john.age);
console.log(john.emailIds[1]);
console.log(john.address.city);

console.log(john['name']);
console.log(john['name', 'Age']);

const key='name';
console.log(john[key]);

const key = Math.random()>0.5?'name' : 'Age'; // Number is generated randomly during runtime
console.log(john[key]);

console.log('name' in john); // true name key is present in john , so it is true
console.log('worksFor' in john); // false
