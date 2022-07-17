const http = require( 'http' );

// https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_createserver_options_requestlistener
// we create a server and say what to do when an HTTP request is received
const server = http.createServer(function( req, res ) {
    res.write( 'hello world' );
    res.end();
});

// we start the server, and it will "listen" on port 8080
server.listen( 8080 );