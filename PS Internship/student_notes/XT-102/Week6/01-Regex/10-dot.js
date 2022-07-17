// . represents 1 character (any character)
const pat= /alert./g;
const str='text-bold alert-success';

let results = str.match(pat);
console.log(results[0]);

const str2='text-bold alert';
let results2 = str2.match(pat);
console.log(results2); // null 