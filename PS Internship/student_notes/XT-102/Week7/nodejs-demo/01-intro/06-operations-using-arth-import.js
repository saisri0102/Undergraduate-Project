const http = require( 'http' );
const url = require( 'url' );
const { subtract , multiply , divide} = require('./modules/arithmetic.js')

const server = http.createServer(function( req, res ) {
    // a string - for a request http://localhost:8080/api/teams, it is /api/teams
    
    const parsedUrl = url.parse( req.url, true );

    
    let x = parseInt(parsedUrl.query.x);
    let y = parseInt(parsedUrl.query.y);

    switch( parsedUrl.pathname ) {
        case '/divide':
            
            res.write( "Sum : " + divide(x, y) );
            break;
        case '/multiply':
       
            res.write( "Multiply : " + multiply(x, y) );
            break;
        case '/sub' :
           
            res.write( 'Subtract : ' + subtract( x, y) );
            break;
        default:
            res.write( 'hello world' );
    }
    
    res.end();
});

server.listen( 8080 );
