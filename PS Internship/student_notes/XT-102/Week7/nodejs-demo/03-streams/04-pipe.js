// EXERCISE: 'drain event on writable streams and pause() in readable streams

const fs = require('fs');

const src = fs.createReadStream('../meetings-app.pdf');
const dest = fs.createWriteStream('./meetings-app-copy.pdf');

src.pipe(dest);