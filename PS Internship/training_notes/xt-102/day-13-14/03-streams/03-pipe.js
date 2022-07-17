// EXERCISE: 'drain' event on writable streams, and pause() function in readable streams
// Reference: https://nodejs.org/en/docs/guides/backpressuring-in-streams/

const fs = require( 'fs' );

const src = fs.createReadStream( './meetings-app.pdf' );
const dest = fs.createWriteStream( './meetings-app-copy.pdf' );

src.pipe( dest );