// var MeetingsApp; // Internal code Line 1

MeetingsApp = 123;

let value;

// equivalent of false - '', null, 0, undefined, false
value = '' || 'Hello'; // 'Hello'
value = 'World' || 'Hello'; // 'World'
value = 0 || 'Hello'; // 'Hello'
value = 1 || 'Hello'; // 1
value = 0 || null; // null
value = null || 0; // 0

let name2 = 'Mark';

// Write an expression that assign name a value 'John', but only if it does not already have a proper value
name2 = name2 || 'John';

// var variables are "hoisted" (they can be used before the line of declaration)
var MeetingsApp = MeetingsApp || {};
// MeetingsApp = MeetingsApp || {}; // Internal code Line 2


console.log( MeetingsApp );

console.log( value );