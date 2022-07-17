// An object is a bag of properties (key-value pairs)

// constructor
const emptyObject1 = new Object();

// object literal syntax
const emptyObject2 = { };

// key is always a string (except when it is a symbol)
// values can be numbers, booleans, string, arrays, null, undefined, objects, arrays, functions
const john = {
    name: 'John',
    'age': 32, // all keys are strings -> we can quote it explicitly
    emailids: [
        'john@gmail.com',
        'john@example.com'
    ],
    address: {
        city: 'Bangalore',
        pinCode: 560101
    }
};

console.log( john.name );
console.log( john.emailids[0] );
console.log( john.address.city );

const key = Math.random() > 0.5 ? 'name' : 'age';
console.log( john[key] );

console.log( 'name' in john ); // true
console.log( 'worksFor' in john ); // true