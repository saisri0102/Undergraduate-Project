// i - ignore case (case-insenstive match - ignore the uppercase/lowercase differences with the pattern)
const classPat1 = /^alert-/i;

console.log( classPat1.test( 'alert-success' ) );

// fails if case is not ignored
console.log( classPat1.test( 'Alert-success' ) );
console.log( classPat1.test( 'ALert-success' ) );
console.log( classPat1.test( 'ALErt-success' ) );

const classPat2 = new RegExp( '^alert-', 'i' );

console.log( classPat2.test( 'alert-success' ) );

// fails if case is not ignored
console.log( classPat2.test( 'Alert-success' ) );
console.log( classPat2.test( 'ALert-success' ) );
console.log( classPat2.test( 'ALErt-success' ) );


// g - global match (find all occurences of the pattern)
