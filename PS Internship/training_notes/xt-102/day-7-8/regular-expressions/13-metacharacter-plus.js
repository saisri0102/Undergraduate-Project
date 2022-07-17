// + - 1 or more occurences of preceding character / set of characters
const pat = /\.s+css/;
const filename1 = 'app.scss';
const filename2 = 'reset.css';
const filename3 = 'reset.sscss';

console.log( pat.test( filename1 ) ); // true - 1 occurence of letter s
console.log( pat.test( filename2 ) ); // false - 0 occurences of letter s - does not match
console.log( pat.test( filename3 ) ); // true - more than 1 occurence of s - that's fine
