// zip code is for US

// pin code validation
const pincodePat = /^[1-9]\d{5}$/;
console.log( pincodePat.test( '100101' ) );
console.log( pincodePat.test( '1001010' ) );
console.log( pincodePat.test( '10010' ) );
console.log( pincodePat.test( '020010' ) );
console.log( pincodePat.test( '1234a6' ) );
console.log( pincodePat.test( '123456' ) );