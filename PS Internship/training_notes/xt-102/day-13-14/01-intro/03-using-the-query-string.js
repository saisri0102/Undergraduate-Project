const http = require( 'http' );
const url = require( 'url' );
const { add, subtract, multiply } = require( './04-modules/arithmetic.js' );

// https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_createserver_options_requestlistener
// we create a server and say what to do when an HTTP request is received
const server = http.createServer(function( req, res ) {
    // a string - for a request http://localhost:8080/api/teams, it is /api/teams
    
    const parsedUrl = url.parse( req.url, true );

    switch(parsedUrl.query["op"]){
        case 'addition':
            console.log(add(parseInt(parsedUrl.query["x"]),parseInt(parsedUrl.query["y"])));
            res.write( ""+add(parseInt(parsedUrl.query["x"]),parseInt(parsedUrl.query["y"])));
            break;
        case 'subtraction':
            res.write( ""+subtract(parseInt(parsedUrl.query["x"]),parseInt(parsedUrl.query["y"])));
            break;
        case 'multiplication':
            res.write( ""+multiply(parseInt(parsedUrl.query["x"]),parseInt(parsedUrl.query["y"])));
            break;
        default:
            res.write( 'error' );
    }
    res.end();
});

// we start the server, and it will "listen" on port 8080
server.listen( 8080 );

console.log( 'end of script' );