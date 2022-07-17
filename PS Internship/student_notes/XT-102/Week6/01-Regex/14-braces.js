// {n,m} - between n and m occurances
const pat= /\.s{2,4}css/; // 2,3,4 occurances

const filename1= 'app.scss';
const filename2= 'reset.css';
const filename3= 'reset.sscss';
const filename4= 'reset.ssscss';
const filename5= 'reset.sssscss';
const filename6= 'reset.ssssscss';
const filename6= 'reset.csscss';

console.log(pat.test(filename1)); // false
console.log(pat.test(filename2));//  false
console.log(pat.test(filename3)); // true
console.log(pat.test(filename4)); // true
console.log(pat.test(filename5)); // true
console.log(pat.test(filename6)); // false
console.log(pat.test(filename7)); // false