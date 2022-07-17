// string has only whitespace character (basically empty)
const pat = /^\s*$/;
console.log( pat.test( '   \t\r  ' ) ); // true
console.log( pat.test( '   \ta\r  ' ) ); // false -> not empty

// Instead of using regex you can easily test using trim() method of strings

const value = '   ';
console.log( value.trim() === '' ); // true

const value2 = ' \t  \r  ';
console.log( value2.trim() === '' ); // true

const value3 = '   \ta\r  ';
console.log( value3.trim() );
console.log( value3.trim() === '' );