/**
 * spread operator (...) - it is roughly speaking, the inverse operator of the rest operator
 * It can be used in 2 different contexts (situations)
 */

// Context #1: Used with an array. It creates a comma-separated list of the array's items.

// Math.max() returns the maximum value amongst the arguments passed to it.
console.log( Math.max( 90, 20, 100, 40, 80 ) );

let arr = [ 90, 20, 100, 40, 80 ];

// Step 1: Math.max() does not work when an array is passed. Use spread operator and Math.max() to find the maximum value in arr.

// --------------------------------------------

// Context #2: Used with object - not part of ES6 - part of future version of JS

// In React, we work Babel transpiler (ES6 -> ES5 conversion). Object spread is supported in Babel.
let john = {
    name: 'John',
    age: 32,
    address: {
        city: 'San Jose',
        country: 'USA'
    },
    contacts: [
        {
            type: 'email',
            value: 'john.doe@example.com'
        },
        {
            type: 'email',
            value: 'john.doe@gmail.com'
        },
        {
            type: 'phone',
            value: '+001-40-657-7890' // modify this to some other phone number in the clone
        }
    ]
};

// Step 2: Create a copy of john object, with age set to 33. Use object spread operator.

// Step 3: Change the name in the copy and check if it affects the original object

// Step 4: Change the first contact's value and check if it affects the original

// Step 5: Make a copy that has it's own copy of address and contacts