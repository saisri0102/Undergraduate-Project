const path = require( 'path' );
const express = require( 'express' );

const requestLogger = require( './middleware/request-logger' );
const errorHandler = require( './middleware/error-handler' );

const indexRouter = require( './routes/index' );
const workshopsRouter = require( './routes/workshops' );

const authApiRouter = require( './api/routes/auth' );
const workshopsApiRouter = require( './api/routes/workshops' );

const app = express();

// npm i ejs
app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'src/views' ) );

app.use( requestLogger );

// reads form data and sets up req.body
app.use( express.urlencoded() );

// reads JSON data in the request body and sets it up on req.body
app.use( express.json() );

// we set up the static file server middleware (to serve CSS, JS, images, font files etc.)
// you can set up multiple folders by calling express.static() multiple times
app.use( express.static( path.join( process.cwd(), 'public' ) ) )

// A router can be "mounted" on a path
app.use( indexRouter );
app.use( workshopsRouter );
app.use( '/api', authApiRouter );
app.use( '/api', workshopsApiRouter );

app.use( errorHandler );

const PORT = process.env.PORT || 3000;

app.listen( PORT, function( err ) {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( `server running on http://localhost:${PORT}/` );
});