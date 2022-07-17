const mongoose = require( 'mongoose' );
const { seed } = require( './seed' );

// this script creates the workshop model which is used to do operations on the workshops collection
require( '../models/workshop' );

const uri = 'mongodb://mongodb/workshops-app';

mongoose.set( 'useFindAndModify', false );
mongoose.set( 'returnOriginal', false );

mongoose.connect( uri, { useNewUrlParser: true } );

mongoose.connection.on( 'open', () => {
    console.log( 'connected to db' );
    
    // Enable this if you need to reupload data on every server restart
    seed();
});

mongoose.connection.on( 'error', err => {
    console.error( err.message );
    process.exit();
});