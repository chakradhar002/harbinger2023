/**
 * @author Aditya Kulkarni
 */
const { Router } = require('express')
const { customerSearchRoute } = require('../service/customer/customerRoute')
const reservationController = require('./reservationController')

const router = Router()
router.get('/search', customerSearchRoute)

router.use('/:customerId/reservation', reservationController)

module.exports = router