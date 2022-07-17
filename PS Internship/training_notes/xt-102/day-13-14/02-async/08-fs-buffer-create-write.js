// filesystem module
const fs = require( 'fs' );

const str = 'Hello, world ê हिन्दी में';
const buffer1 = Buffer.from( str );

console.log( buffer1 );
console.log( buffer1.length );
console.log( str.length );

// 00101000 -> H
// ???????? -> e (decimal number 103 in bits)
// ...

fs.writeFile( './hello-world.txt', buffer1, { encoding: 'utf-8' }, function( error ) {
    if( error ) {
        console.error( 'There was an eror writing to the file' );
        return;
    }
    
    console.log( 'file has been written' );
});