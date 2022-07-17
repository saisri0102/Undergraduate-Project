const express = require( 'express' );
const { getWorkshops, getAddWorkshop, postAddWorkshop } = require( '../controllers/workshops' );

const router = express.Router();

router.get( '/workshops', getWorkshops );
router.get( '/workshops/add', getAddWorkshop );
router.post( '/workshops/save', postAddWorkshop );

module.exports = router;