const pat= /^\s*$/;

// trim()- removes whitspaces before and end of the string 
console.log(pat.test('  \t\r  ')); //true
console.log(pat.test('  \ta\r  ')); //false -> not empty

const value=' ';
console.log(value.trim()==''); //true


const value2= ' \t \r ';
console.log(value2.trim()===''); //true

const value3= ' \ta\r';
console.log(value3.trim());
console.log(value3.trim()===''); // false