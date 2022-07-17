// g - global match (find all occurences of the pattern)
const strToMatch = 'clearfix alert-success text-bold alert-small';

let results;

const classPat1 = /alert-\w+/;
results = strToMatch.match( classPat1 );
console.log( results );
console.log( results[0] ); // what was matched
console.log( results.index ); // where was it matched

const classPat2 = /alert-\w+/g;
results = strToMatch.match( classPat2 );
console.log( results ); // gives only the matches, but all matches - if you want extra info for each match, use exec()
console.log( results.length ); // total matches
console.log( results[0] ); // first match
console.log( results[1] ); // second match

new RegExp( 'string', "ig" );

// EXERCISE: Explore /m flag too