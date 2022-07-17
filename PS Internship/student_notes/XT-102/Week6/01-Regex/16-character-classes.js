// [6789] -> any one character from set given inside []
// 6789 -> 6 followed by 7 followed by 8 followed by 9
// \d - > same as [0-9]
// \w -> alphanumeric character [A-Za-z0-9_]
// \W -> Not alphanumeric character [A-Za-z0-9_]
// \s -> matches whitespaces (like tab, newline, space)
const mobilePat = /^[6789]\d{9}$/;
mobilePat.test('7891234560');

const firstLetter= /^\w/;
const str1= 'Hello world, how are you?';

console.log(str1.match(firstLetter));
/** output
 * [
  'H',
  index: 0,
  input: 'Hello world, how are you?',
  groups: undefined
    ]
 */

const firstWord= /^\w+/;
const str2= '_Hello world, how are you?';
console.log(str2.match(firstWord));
/**
 * [
  '_Hello',
  index: 0,
  input: '_Hello world, how are you?',
  groups: undefined
]
 */
