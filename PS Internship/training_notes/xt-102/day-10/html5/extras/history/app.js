var http = require( 'http' );
var fs = require( 'fs' );
var path = require( 'path' );

var server = http.createServer(function( req, res ) {
    console.log( req.url );

    if( req.url === '/' ) {
        req.url = 'index.html';
    }

    var file = fs.createReadStream( path.join( __dirname, req.url ) );
    file.pipe( res );
});

server.listen(3000, function() {
    console.log( 'Server started on http://localhost:3000/' );
});