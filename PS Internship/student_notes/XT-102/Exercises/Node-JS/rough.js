// Readable file stream - to read data from a source 
const fs = require('fs');
let requestBody = [];
const rs = fs.createReadStream('message.json');
rs.on('data', function (chunk) {
   requestBody.push(chunk.toString());
   requestBody = JSON.parse(requestBody);
   console.log(requestBody);
});
rs.on('end', function () {
   console.log('completed reading the file');
});
// start reading... (start sipping a straw - default is 16KB)
rs.read();
// The request object passed to http server callback fun //getting the workshops // Readable file stream - to read data from a source
const rs1 = fs.createReadStream('./workshops.json');
// 'data' event is emitted after 1 chunk of info is 
rs1.on('data', function (chunk) {
   // process.stdout.write()   
   let requestBody1 = [];
   requestBody1.push(chunk.toString());
   requestBody1 = JSON.parse(requestBody1);
   console.log(requestBody1);
   requestBody1.push(requestBody);
   final = JSON.stringify(requestBody1);
   const ws = fs.createWriteStream('workshop.json');
   ws.write(final)
   ws.end();
}); rs1.on('end', function () {
   console.log('completed reading the file');
});
// start reading... (start sipping a straw - default is 16KB)
rs1.read(); // The request object passed to http server callback function is a readable stream object