const express = require('express');
const {getWorkshops , getWorkshopsById} = require('../controllers/workshops')
const {authenticate} = require('../../middleware/auth')
const router = express.Router();

router.get('/workshops', authenticate , getWorkshops);
router.get('/workshops/:id', authenticate, getWorkshopsById);
module.exports = router;


