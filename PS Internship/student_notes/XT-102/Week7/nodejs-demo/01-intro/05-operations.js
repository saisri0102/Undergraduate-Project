const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer(function( req, res ) {
    // a string - for a request http://localhost:8080/api/teams, it is /api/teams
    
    const parsedUrl = url.parse( req.url, true );

    
    let x = parseInt(parsedUrl.query.x);
    let y = parseInt(parsedUrl.query.y);

    switch( parsedUrl.pathname ) {
        case '/add':
            let sum = x + y;
            res.write( "Sum : " + sum );
            break;
        case '/multiply':
        let multiply = x * y
            res.write( "Multiply : " + multiply );
            break;
        case '/sub' :
            let sub = x - y
            res.write( 'Subtract : ' + sub );
            break;
        default:
            res.write( 'hello world' );
    }
    
    res.end();
});

server.listen( 8080 );
