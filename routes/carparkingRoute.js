const express = require('express');
var routes = express.Router()
var carparkingUser_controller = require('../controllers/carparkingUser_controller')
var carparkingBooked_controller = require('../controllers/carparkingBooked_controller')

routes.post('/usersave',carparkingUser_controller.carparkingSave)
routes.get('/booked',carparkingBooked_controller.carparkingBooked)
routes.post('/login',carparkingUser_controller.carparkingUser_login)


module.exports = routes