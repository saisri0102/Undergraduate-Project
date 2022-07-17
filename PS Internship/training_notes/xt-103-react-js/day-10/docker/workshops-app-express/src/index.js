// initialize DB
require( './db/init' );

const express = require( 'express' );
const indexRouter = require( './routes/index' );
const workshopsRouter = require( './routes/workshops' );
const authRouter = require( './routes/api/auth' );
const apiWorkshopsRouter = require( './routes/api/workshops' );
const { dateLogger } = require( './middleware/utils' );
const { genericErrorHandler, pageNotFoundHandler } = require( './middleware/errors' );
const path = require( 'path' );

const app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'views' ) );

// app.use( dateLogger );

app.use( express.static( path.join( __dirname, 'public' ) ) );

app.use( express.json() );
app.use( express.urlencoded() );

app.use( indexRouter );
app.use( '/workshops', workshopsRouter );

app.use( '/api/auth', authRouter );
app.use( '/api/workshops', apiWorkshopsRouter );

app.use( pageNotFoundHandler );
app.use( genericErrorHandler );

const port = process.env.PORT || 3000;

app.listen( port, function( err ) {
    if( err ) {
        console.error( err.message );
        return;
    }

    console.log( `Server running on http://localhost:${port}` );
});