// A transform stream is both a readable and a writable stream
// zipping files content
const fs = require( 'fs' );
const zlib = require( 'zlib' );

const src = fs.createReadStream( './meetings-app.pdf.gz' );
const dest = fs.createWriteStream( './meetings-app-copy.pdf' );

// this is both a readable and a writable stream
const transform =  zlib.createGunzip();

src.pipe( transform ).pipe( dest );