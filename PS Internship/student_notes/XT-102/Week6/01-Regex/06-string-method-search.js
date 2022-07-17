const strToMatch = 'clearfix alert-success text-bold alert-small';
const strToMatch2 = 'clearfix modal-success text-bold modal-small';
const classPat1 = /alert-\w+/g;

// faster than using match but gives only the index of first match
console.log( strToMatch.search( classPat1 ) ); // index of first match (9 in this case)
console.log( strToMatch2.search( classPat1 ) ); // -1 to indicate that no match was found