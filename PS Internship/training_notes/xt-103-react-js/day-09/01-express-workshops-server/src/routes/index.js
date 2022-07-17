const { getHome, getAbout } = require( '../controllers/index' );
const express = require( 'express' );

const router = express.Router();

router.get( '/', getHome );
router.get( '/about', getAbout );

module.exports = router;