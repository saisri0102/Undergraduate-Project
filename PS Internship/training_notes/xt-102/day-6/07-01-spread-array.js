// like the complement of rest
// denoted using ...

// along with an array
const nums1 = [ 1, 2, 3 ];
// ...nums1 // 1, 2, 3

// Math.max()
console.log( Math.max( 45, 78, 23, 89, 34 ) );

const nums = [ 45, 78, 23, 89, 34 ];

// old way
console.log( Math.max.apply( null, nums ) );

// new way
console.log( Math.max( ...nums ) ); // Math.max( 45, 78, 23, 89, 34 );

// EXERCISE: Concatenated 2 arrays
const weekdays = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ], weekends = [ 'Sat', 'Sun' ];
// Create a new array which has all the days (use spread operator)
const days = [
    ...weekdays, // 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',
    ...weekends // 'Sat', 'Sun'
];