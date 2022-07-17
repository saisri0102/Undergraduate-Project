const mongoose = require( 'mongoose' );

const Workshop = mongoose.model( 'workshop' );

function getWorkshops( req, res ) {
    const workshops = require( '../data/workshops.json' );
    return workshops;
}

async function sendWorkshops( req, res ) {    
    try {
        const workshops = await Workshop.find().exec();

        res.json( workshops );
    } catch( error ) {
        error.status = 500;
        next( error );
    }
}

async function sendWorkshopById( req, res, next ) {
    const id = req.params.id;
    const field = req.query.field;

    try {
        const workshop = await Workshop.findById( id ).exec();
    
        if( field ) {
            res.json( workshop[field] );
        } else {
            res.json( workshop );
        }
    } catch( error ) {
        error.status = 404;
        next( error );
    }
}

// -   POST    /       Add multiple/single workshop(s)     The array of new workshops/single workshop  201, 400            The newly added workshop (will have id)
async function addWorkshops( req, res, next ) {
    const data = req.body;
    let workshops;

    console.log( 'data = ', data );

    if( data instanceof Object && Object.keys( data ).length === 0 ) {
        const error = new Error( 'Workshops data is missing' );
        error.status = 400;
        next( error );
    }

    if( data instanceof Array ) {
        workshops = data;
    } else {
        workshops = [ data ];
    }

    try {
        const addedWorkshops = await Workshop.insertMany( workshops );

        res.status( 201 ).json( addedWorkshops );
    } catch( error ) {
        // @todo Set 400 / 500 as per the error
        error.status = 500;
        next( error );
    }
}

// -   PATCH   /:id    Update workshop with given id       The required fields and their new values    201, 400, 404       The newly updated workshop
async function updateWorkhopById( req, res, next ) {
    const data = req.body;
    const id = req.params.id;
    
    let workshop = data;

    if( data instanceof Object && Object.keys( data ).length === 0 ) {
        const error = new Error( 'Workshops data to be updated is missing' );
        error.status = 400;
        next( error );
    }

    // check if modes is being updated
    const modes = workshop.modes || [];
    delete workshop.modes;

    try {
        const updatedWorkshop = await Workshop.findByIdAndUpdate( id, { $set : workshop, $addToSet: { modes } } );

        res.json( updatedWorkshop );
    } catch( error ) {
        // @todo Set 400 / 500 as per the error
        error.status = 500;
        next( error );
    }
}

// -   DELETE  /:id    Delete workshop with given id       -                                           204                 -
async function deleteWorkshopById( req, res, next ) {
    const id = req.params.id;

    try {
        const removedWorkshop = await Workshop.findByIdAndRemove( id );
    
        if( removedWorkshop ) {
            res.status( 204 ).send();
        } else {
            const error = new Error( 'Document does not exist' );
            error.status = 404;
            next( error );
        }
    } catch( error ) {
        error.status = 404;
        next( error );
    }
}

async function sendSessionsForWorkshopById( req, res, next ) {
    const id = req.params.id;

    try {
        const workshop = await Workshop.findById( id ).select( 'sessions' ).exec();

        res.json( workshop.sessions );
    } catch( error ) {
        error.status = 500;
        next( error );
    }
}

async function addSessionsForWorkshopById( req, res, next ) {
    const id = req.params.id;

    const data = req.body;
    let sessions;

    console.log( 'data = ', data );

    if( data instanceof Object && Object.keys( data ).length === 0 ) {
        const error = new Error( 'Sessions data is missing' );
        error.status = 400;
        next( error );
    }

    if( data instanceof Array ) {
        sessions = data;
    } else {
        sessions = [ data ];
    }

    try {
        const addedSessions = await Workshop.findByIdAndUpdate( id, { $addToSet : { sessions } } );

        res.status( 201 ).json( addedSessions );
    } catch( error ) {
        // @todo Set 400 / 500 as per the error
        error.status = 500;
        next( error );
    }
}

module.exports = {
    sendWorkshops,
    getWorkshops,
    sendWorkshopById,
    addWorkshops,
    updateWorkhopById,
    deleteWorkshopById,
    sendSessionsForWorkshopById,
    addSessionsForWorkshopById
};