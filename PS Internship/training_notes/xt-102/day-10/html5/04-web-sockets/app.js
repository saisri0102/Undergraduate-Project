// Source: http://codular.com/node-web-sockets
var http = require( 'http' );
var fs = require( 'fs' );
var path = require( 'path' );
var websocket = require( 'websocket' );

var count = 0;
var clients = {};

var server = http.createServer(function( req, res ) {
    var filePath = ( req.url === '/' ) ? 'index.html' : req.url;

    var file = fs.createReadStream( path.join( __dirname, filePath ) );
    file.pipe( res );
});

server.listen(3000, function() {
    console.log( 'Server started on http://localhost:3000/' );
});

wsServer = new websocket.server({
    httpServer: server
});

wsServer.on( 'request', function( req ) {
    // Code to run on connection
    var connection = req.accept( 'echo-protocol', req.origin );

    // Specific id for this client & increment count
    var id = count++;
    // Store the connection method so we can loop through & contact all clients
    clients[id] = connection;

    console.log( ( new Date() ) + ' Connection accepted [' + id + ']' );

    // Create event listener
    connection.on('message', function(message) {

        // The string message that was sent to us
        var msgString = message.utf8Data;

        // Loop through all clients
        for(var i in clients){
            // Send a message to the client with the message
            clients[i].sendUTF(msgString);
        }
    });

    connection.on('close', function(reasonCode, description) {
        delete clients[id];
        console.log( ( new Date() ) + ' Peer ' + connection.remoteAddress + ' disconnected.' );
    });
});