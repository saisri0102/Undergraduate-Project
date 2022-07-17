// dot represents 1 character - any character
const pat = /alert./g;
const str = 'text-bold alert-success';
const str2 = 'text-bold alert';

let results;

results = str.match( pat );
console.log( results[0] );

results = str2.match( pat ); // null
console.log( results );