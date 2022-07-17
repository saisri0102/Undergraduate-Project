/**
 * Destructuring helps create variables that are assigned items from the array. It is useful if you create many variables from individual array items (results in less code)
 */
let weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    "Friday"
];

// Step 1: Comment out the below declaration statement and redo the same using the array destructuring syntax
let first = weekdays[0], second = weekdays[1], fifth = weekdays[4] || 'Holiday', sixth = weekdays[5] || 'Holiday';
console.log( first, second, fifth, sixth );