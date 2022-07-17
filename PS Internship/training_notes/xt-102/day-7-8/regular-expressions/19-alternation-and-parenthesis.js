// alternation - or operator in regex - alternatives
// better to put within parenthesis
const pat = /(ab|cd|ef)/;
console.log( pat.test( 'abxy' ) ); // true
console.log( pat.test( 'cdxy' ) ); // true
console.log( pat.test( 'acxy' ) ); // false

const pat2 = /(ab|cd|ef)+/; // ab|cd|ef is repeated multiple times
console.log( 'ababxy'.match( pat2 )[0] );
console.log( 'abcdxy'.match( pat2 )[0] );
console.log( 'abxycd'.match( pat2 )[0] );
console.log( 'abcdefabefxyabcdabcdef'.match( pat2 )[0] );

const pat2 = /ab|cd|ef+/; // only f is repeated multiple times
console.log( 'ababxy'.match( pat2 )[0] );
console.log( 'abcdxy'.match( pat2 )[0] );
console.log( 'abxycd'.match( pat2 )[0] );
console.log( 'abcdefabefxyabcdabcdef'.match( pat2 )[0] );