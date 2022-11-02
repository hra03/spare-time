const express = require('express')
const router = express.Router()
const { newEvent, allEvents } = require('../controller/eventController') // this brings in the fuctions from the controller files

const {protectAddEvent} = require('../authorisation/auth')

router.get('/allEvents', allEvents) //
router.post('/newEvent', protectAddEvent, newEvent) //brings in the registe set fucntion from the controller



module.exports = router