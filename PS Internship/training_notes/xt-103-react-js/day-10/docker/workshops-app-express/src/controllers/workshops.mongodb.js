const { client } = require( '../db/init' );

function getWorkshops( req, res ) {
    const workshops = require( '../data/workshops.json' );
    return workshops;
}

async function sendWorkshops( req, res ) {
    const database = client.db( 'workshops-app' );
    const collection = database.collection( 'workshops' );

    const query = {};

    try {
        const workshops = await collection.find( query ).toArray();

        res.json( workshops );
    } catch( error ) {
        res.status( 500 ).json({
            message: error.message
        });
    }
}

function sendWorkshopById( req, res ) {
    const id = +req.params.id;
    
    const workshops = require( '../data/workshops.json' );
    const workshop = workshops.find( workshop => workshop.id === id );
    
    res.json( workshop );
}

module.exports = {
    sendWorkshops,
    getWorkshops,
    sendWorkshopById
};