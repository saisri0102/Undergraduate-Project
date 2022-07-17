// filesystem - reading / writing files/folders
const fs = require( 'fs' );

// non-blocking (will not prevent the next loine from executing)
// asynchronous (operation can complete anytime)
fs.readFile( '../topics.md', function( error, contents /* is a buffer type */ ) {
    if( error ) {
        console.error( error.message );
        return;
    }

    console.log( contents );
});

fs.readFile( '../topics.md', function( error, contents ) {
    if( error ) {
        console.error( error.message );
        return;
    }

    // Buffer toString() converts buffer to utf-8 string by default
    console.log( contents.toString( 'utf-8' ) ); // the argument is not necessary
});

console.log( 'end of script' );