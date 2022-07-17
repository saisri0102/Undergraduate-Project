const express = require( 'express' );
const { 
    sendToken
} = require( '../../controllers/auth' );

const router = express.Router();

router.post( '/login', sendToken );

module.exports = router;