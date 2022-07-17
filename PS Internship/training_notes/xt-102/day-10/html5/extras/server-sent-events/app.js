var http = require( 'http' );
var fs = require( 'fs' );
var path = require( 'path' );

var score = 0;
function updateScore() {
    score += Math.floor( Math.random() * 7 ); // a random number between 0 - 6
}
updateScore();
setInterval( updateScore, 5000 );

var server = http.createServer(function( req, res ) {
    var filePath = ( req.url === '/' ) ? 'index.html' : req.url;

    if( filePath !== '/score' ) {
        var file = fs.createReadStream( path.join( __dirname, filePath ) );
        file.pipe( res );
    } else {
        console.log( 'sending data headers' );
        res.writeHead( 200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache'
        });
        setInterval(function() {
            console.log( 'sending data' );
            res.write( 'data: ' + score + '\n\n' );
        }, 5000);
    }
});

server.listen(3000, function() {
    console.log( 'Server started on http://localhost:3000/' );
});