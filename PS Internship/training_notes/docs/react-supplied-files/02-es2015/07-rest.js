/**
 * rest operator (...)
 * It can be used in 3 different contexts (situations)
 */

// Context #1: Use it to group remaining function arguments into an array
// Step 1: Execute this script and check the output.
// Step 2: Use the rest parameter on the last argument (arr) and re-execute the script
function foo( a, b, arr ) {
    console.log( a );
    console.log( b );
    console.log( arr );
}

foo( 1, 2, 3, 4, 5 );

// --------------------------------------------

// Context #2: To group items after the last item that was obtained via array destructuring. Items are grouped into an array.
// Step 3: Extract out first, second items into variables, and the rest into an array
let weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    "Friday"
];

// --------------------------------------------

// Context #3: To group items that were not obtained via object destructuring. Items are grouped into an object.
let john = {
    name: 'John DOe',
    age: 32,
    emailids: [
        'john.doe@example.com',
        'john.doe@gmail.com',
    ],
    address: {
        firstline: '32, Rosewell Court',
        city: 'San Francisco',
        zip: 52110
    }
};

// Step 4: Extract out name, address.city into variables, and the rest into an object