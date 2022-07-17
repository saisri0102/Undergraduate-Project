const express = require( 'express' );
const { getWorkshops, getWorkshopById } = require( '../controllers/workshops' );
const { authenticate } = require( '../../middleware/auth' );

const router = express.Router();

router.get( '/workshops', authenticate, getWorkshops );
router.get( '/workshops/:id', authenticate, getWorkshopById );
// router.get( '/workshops/add', getAddWorkshop );
// router.post( '/workshops/save', postAddWorkshop );

module.exports = router;