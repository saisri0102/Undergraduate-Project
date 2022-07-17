// We can use values as data types - only that/those values can be set for the variable
let days : 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
days = 'Sun';
days = 'Thu';
// days = 'Holiday'; // not allowed // error

let level : 'Basic' | 'Intermediate' | 'Advanced';

let rating : 1 | 2 | 3 | 4 | 5;
rating = 4;
// rating = 6; // error

export {}