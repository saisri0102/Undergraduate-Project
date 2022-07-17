/**
 *
 */
// Including http module - capability to send, receive response 
const http = require('http');

// creating server - we create a server and say what to do when an HTTP request is received

const server = http.createServer(function (req, res) {
    console.log(req);
    res.write('hello world');
    res.end();
})

// start the server, and it will "listen" on port 8080
server.listen( 8080 ) // continues 