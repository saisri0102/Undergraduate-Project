const express = require( 'express' ); // import express from 'express';
const path = require( 'path' );
const fs = require( 'fs' );
const products = require( '../products.json' );
const ReactDOMServer = require( 'react-dom/server' );
const React = require( 'react' );
const ProductCatalog = require( '../src/ProductCatalog' ).ProductCatalog;

const app = express();

app.get( '/', ( req, res, next ) => {
    res.send( 'hello world' );
});

app.get( '/catalog', ( req, res, next ) => {
    // res.sendFile( path.join( __dirname, '../public/index.html' ) );
    fs.readFile( path.join( __dirname, '../public/index.html' ), 'utf8', ( error, contents ) => {
        if( error ) {
            return res.status( 404 ).send( error.message );
        }

        const productsHtml = ReactDOMServer.renderToString( React.createElement( ProductCatalog, { products: products } ) );

        // generate some HTML code for the page through react and put it within the root div
        contents = contents.replace( '<replaceable-text></replaceable-text>', productsHtml );

        res.send( contents );
    });
});

app.get( '/api/products', ( req, res, next ) => {
    res.json( products );
});

app.listen( 8080, ( error ) => {
    if( error ) {
        return console.log( error.message );
    }

    console.log( `server started on http://localhost:8080` );
});