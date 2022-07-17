const express = require( 'express' );
const path = require( 'path' );
const { getWorkshops } = require( '../controllers/workshops' );

const router = express.Router();

// EXERCISE: Serve workshops list page (the js files must be present in public folder) - adapt the HTML, CSS and JS content from workshops-app application (Plain JS/Vue app)
router.get( '/', ( req, res ) => {
    console.log( 'This is the /workshops hanlder within workshops router' );

    let workshops, error;

    try {
        workshops = getWorkshops();
    } catch( err ) {
        error = err;
    }

    res.render( 'workshops', {
        error,
        workshops
    });
});

router.get( '/:id', ( req, res, next ) => {
    const error = new Error( `Page is under construction (workshop id = ${req.params.id})` );
    error.status = 500;
    
    next( error );
});

module.exports = router;