
// \. -> metasymbol (we have to escape certain characters like . )
// because they hvae special meaning in regex
// ? - 0 or 1 occurance
const pat= /\.s?css/;

const filename1= 'app.scss';
const filename2= 'reset.css';
const filename3= 'reset.sscss';

console.log(pat.test(filename1)); // true - 1 occurance of letter s
console.log(pat.test(filename2));// true - 0 occurance of letter s
console.log(pat.test(filename3)); // false - more than 1 occurance of s- does not match the pattern