const express = require('express');
const router = express.Router()

const {getWorkshops , addWorkshop , postWorkshop} = require('../controllers/workshops')

router.get('/workshops', getWorkshops)
router.get('/workshops/add', addWorkshop)
router.post('/workshops/save', postWorkshop)
module.exports = router