// Social Security Number (USA)
// if you are forming reg ex using constructor, then escape the \ -> therefore it becomes \\d instead of \d

// Exercise: Check what ?! means in regular expression - to eliminate certain possibilities
const ssnPat = new RegExp( "^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$" );
console.log( ssnPat.test( '856-45-6789' ) );
console.log( ssnPat.test( '911-45-6789' ) );