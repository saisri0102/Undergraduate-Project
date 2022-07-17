const strToMatch = 'clearfix alert-success text-bold alert-small';
const classPat1 = /alert-/g; // g flag to find/replace all occurences

// replace all occurences of alert- with modal-
// a new string with the replacements is returned
const result = strToMatch.replace( classPat1, 'modal-' );
console.log( result );

// strings are immutable in JavaScript - all primitive values are immutable
console.log( strToMatch ); // does NOT change

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter
const classPat2 = /alert-\w+/g;
const results2 = strToMatch.replace( classPat2, function( match, p1, p2, p3, offset, string ) {
    let afterAlert = match.substr( 6 );
    return p1 >= 10 ? 'modal-' + afterAlert : match;
});
console.log( results2 );