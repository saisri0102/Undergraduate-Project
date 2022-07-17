// \. - metasymbol (we have to escape certain characters like . because they have special meaning in regex)
// ? -  0 or 1 occurence of preceding character
const pat = /\.s?css/;
const filename1 = 'app.scss';
const filename2 = 'reset.css';
const filename3 = 'reset.sscss';

console.log( pat.test( filename1 ) ); // true - 1 occurence of letter s
console.log( pat.test( filename2 ) ); // true - 0 occurences of letter s
console.log( pat.test( filename3 ) ); // false - more than 1 occurence of s - does not match the pattern
