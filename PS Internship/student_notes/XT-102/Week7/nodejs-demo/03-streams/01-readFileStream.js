
const fs = require( 'fs' );

const rs = fs.createReadStream( './meetings-app.pdf' );

// 'data' event is emitted after 1 chunk of info is read
rs.on( 'data', function( chunk ) {
    // process.stdout.write()
    console.log( '*** data event has fired ***' );
    console.log( chunk );
});

rs.on( 'end', function() {
    console.log( 'completed reading the file' );
});

// start reading... (start sipping a straw - default is 16KB)
rs.read();

// The request object passed to http server callback function is a readable stream object