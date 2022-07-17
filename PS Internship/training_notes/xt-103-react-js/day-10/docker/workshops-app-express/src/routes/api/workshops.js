const express = require( 'express' );
const path = require( 'path' );
const { 
    sendWorkshops,
    sendWorkshopById,
    addWorkshops,
    updateWorkhopById,
    deleteWorkshopById,
    sendSessionsForWorkshopById,
    addSessionsForWorkshopById
} = require( '../../controllers/workshops' );

const { authenticate, isAdmin } = require( '../../utils/auth' );

const router = express.Router();

router.get( '/', authenticate, sendWorkshops );
router.get( '/:id', authenticate, sendWorkshopById );
router.post( '/', authenticate, isAdmin, addWorkshops );
router.patch( '/:id', authenticate, isAdmin, updateWorkhopById );
router.delete( '/:id', authenticate, isAdmin, deleteWorkshopById );

router.get( '/:id/sessions', authenticate, sendSessionsForWorkshopById );
router.patch( '/:id/sessions', authenticate, isAdmin, addSessionsForWorkshopById );

router.put( '/:id', authenticate, isAdmin, ( req, res ) => {
    res.status( 405 ).send();
});

module.exports = router;