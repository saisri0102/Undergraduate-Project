// literal syntax
const phonePat1 = /^[789][0-9]{9}$/; // calls new RegExp()
console.log( phonePat1.test( '9876543210' ) );
console.log( phonePat1.test( '6876543210' ) );
console.log( phonePat1.test( '787654321' ) );
console.log( phonePat1.test( '78765432123' ) );

const phonePat2 = new RegExp( '^[789][0-9]{9}$' );
console.log( phonePat2.test( '9876543210' ) );
console.log( phonePat2.test( '6876543210' ) );
console.log( phonePat2.test( '787654321' ) );
console.log( phonePat2.test( '78765432123' ) );
