// + - 1 or more occurance
const pat= /\.s+css/;

const filename1= 'app.scss';
const filename2= 'reset.css';
const filename3= 'reset.sscss';

console.log(pat.test(filename1)); // true - 1 occurance of letter s
console.log(pat.test(filename2));// false - 0 occurance of letter s
console.log(pat.test(filename3)); // true - more than 1 occurance of s