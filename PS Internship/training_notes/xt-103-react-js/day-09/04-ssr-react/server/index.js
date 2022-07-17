import express from 'express';
import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const app = express();

function sendIndexPage( req, res ) {
    fs.readFile( path.join( process.cwd(), 'dist', 'index.html' ), 'utf-8', function( err, contents ) {
        const html = ReactDOMServer.renderToString( <App /> );
        contents = contents.replace( '{{renderedHtml}}', html );
        console.log( contents );

        res.send( contents );
    });
}

app.get( '', sendIndexPage );
app.get( 'index.html', sendIndexPage );

app.use( express.static( path.join( process.cwd(), 'dist' ) ) );

app.get( '*', sendIndexPage );

const port = process.env.PORT || 3000;

app.listen( port, function( err ) {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( `server started on http://localhost:${port}` );
});