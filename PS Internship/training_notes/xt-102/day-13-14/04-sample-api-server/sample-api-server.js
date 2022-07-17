const http =  require( 'http' );

// JSON files can be "require"d
// const workshops = require( './workshops.json' );

const fs = require ('fs' );

const server = http.createServer();

server.on( 'request', function( req, res ) {
    if( req.url === '/workshops' && req.method.toUpperCase() === 'POST' ) {
        const chunks = [];

        // how to read data being sent
        req.on( 'data', chunk => {
            chunks.push( chunk );
        });
        
        req.on( 'end', () => {
            // JSON fomatted string
            const workshopStr = Buffer.concat( chunks ).toString();
            const workshopObj = JSON.parse( workshopStr );

            console.log( workshopObj );

            res.end( 'ok' );
        });
    } else {
        res.end( 'unsupported' );
    }
});

server.on( 'listening', function( err ) {
    if( err ) {
        console.error( err.message );
        return;
    }

    console.log( 'server started on port ', port );
})

const port = process.env.PORT || 3000;

server.listen( port );
