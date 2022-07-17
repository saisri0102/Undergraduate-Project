const express = require( 'express' );

const app = express();

// when request comes in the function executes
app.get( '/', ( req, res ) => {
    res.write( 'Hello world\n' );
    res.write( 'How are you doing?' );
    res.send();
});

const port = process.env.PORT || 3000;

app.listen(port, ( err ) => {
    if( err ) {
        return console.error( err.message );
    }
    
    console.log( `Server started on http://localhost:${port}` );
});