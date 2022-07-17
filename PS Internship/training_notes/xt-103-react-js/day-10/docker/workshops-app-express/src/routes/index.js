const express = require( 'express' );
const path = require( 'path' );
const { nextTick } = require('process');

const router = express.Router();

router.get( '/', ( req, res ) => {
    res.render( 'index', {
        title: 'Workshops App | Home',
        appTitle: 'Workshops App'
    });
});

module.exports = router;