var express = require('express');
router = express.Router()
const carparkingUser_controller = require('../controllers/carparkingUser_controller')
const carparkingBooked_controller = require('../controllers/carparkingBooked_controller')

router.post('/usersave',carparkingUser_controller.carparkingUse_save)
router.get('/booked',carparkingBooked_controller.carparkingBooked)



module.exports =router