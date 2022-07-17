const fs = require( 'fs' );

const ws = fs.createWriteStream( 'output.txt' );

// the contents may get buffered internally for efficiency
ws.write( 'Hello world 1\n' );
ws.write( 'Hello world 2\n' );
ws.write( 'Hello world 3\n' );
ws.write( 'Hello world 4\n' );

ws.end();

// The response object passed to http server callback function is a writable stream object