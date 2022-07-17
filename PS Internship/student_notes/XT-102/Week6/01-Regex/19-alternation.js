// alternation - or operator in regex
const pat = /ab|cd|ef/;
console.log(pat.test('abxy')); // true;
console.log(pat.test('cdxy')); // true;
console.log(pat.test('efxy')); // true;
console.log(pat.test('adxy')); // false;

const pat2 = /ab|cd|ef$/;
console.log(pat2.test('abxy')); // true;
console.log(pat2.test('cdxy')); // true;
console.log(pat2.test('efxy')); // false;
console.log(pat2.test('adxy')); // false;

const pat3 = /(ab|cd|ef)+/;
console.log(pat3.test('abxy')); // true;
console.log(pat3.test('cdxy')); // true;
console.log(pat3.test('efxy')); // true;
console.log(pat3.test('efefefxy')); // true;
console.log(pat3.test('adxy')); // false;

const str='abcdefabcdxys';
console.log(str.match(pat3));
/**
 *  [
  'abcdefabcd',
  'cd',
  index: 0,
  input: 'abcdefabcdxys',
  groups: undefined
]
 */