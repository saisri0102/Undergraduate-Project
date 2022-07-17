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