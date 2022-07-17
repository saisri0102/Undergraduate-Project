// like the complement of rest
// denoted using...

// along with an array
const nums1= [1,2,3];
// ...nums1 // 1,2,3

console.log(...nums1);

// Application of spread 
// Generally we cant pass array into Math.max() so here we can use spread to convert array to camma seperated value

//Math.max()
console.log(Math.max(45,78,23,47)); // 78

const nums2= [45,78,23,47];

//console.log(Math.max(nums2)); // error

// old way
console.log(Math.max.apply(null, nums2)); // 78

// new way

console.log(Math.max(...nums2)); // 78

// EXERCISE
const weekDays= ['Mon', 'Tues', 'Wed', 'Thu', 'Fri'], weekEnds = ['Sat','Sun'];

// create a new array which has all the days

const days= [...weekDays, ...weekEnds];

console.log(days);
console.log(...days);
console.log(...weekDays, ...weekEnds);

