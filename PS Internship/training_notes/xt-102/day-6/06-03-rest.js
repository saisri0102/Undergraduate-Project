// rest operator (...) can be used only on the last parameter
function foo( x, ...y ) {
    console.log( x );
    console.log( y ); // y holds the "rest" of the arguments
}

foo( 1, 2, 3, 4, 5 ); // x = 1, y = [ 2, 3, 4, 5 ]
foo( 1, 2, 3 ); // x = 1, y = [ 2, 3 ]
foo( 1, 2 ); // x = 1, y = [ 2 ]
foo( 1 ); // x = 1, y = [ ]
foo(); // x = undefined, y = [ ]

console.clear();

// array destructuring
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

const [ first = 'Holiday', second, ...restOfDays ] = weekdays;

console.log( first, second, restOfDays );

// object destructuring
const john = {
    name: 'John',
    // spouse: 'Jane',
    age: 32,
    address: {
        city: 'Bangalore',
        pincode: 560101
    },
    emails: [
        'john@example.com',
        'john@gmail.com'
    ]
};

// const age = john.age, name = john.name;

// name variable is not created
const { 
    age,
    address : { 
        city : place,
        ...restOfAddress
    },
    ...restOfDetailsOfJohn
} = john;

console.log( restOfDetailsOfJohn, restOfAddress );