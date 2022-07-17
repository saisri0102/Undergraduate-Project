// filesystem - reading / writing files/folders
const fs = require( 'fs' );

// non-blocking (will not prevent the next loine from executing)
// asynchronous (operation can complete anytime)
fs.readFile( '../topics.md', 'utf-8', function( error, contents ) {
    if( error ) {
        console.error( error.message );
        return;
    }

    console.log( contents );
});

console.log( 'end of script' );