const fs = require('fs');
const ws = fs.createWriteStream('output.txt');

ws.write('Hello world1 \n');
ws.write('Hello world2 \n');
ws.write('Hello world3 \n');
ws.write('Hello world4 \n');
ws.end();

// The response object passed to http server callback function is a writable stream objects
