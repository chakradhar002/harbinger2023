/**
 * @author Aditya Kulkarni
 */

const { Router } = require('express')
const { bookReservationRoute, updateBookingStatusRoute } = require('../service/reservation/reservationRoute')

const router = Router({ mergeParams: true })
router.post('/', bookReservationRoute)

// router.put('/', updateReservationRoute)

router.put('/cancel', updateBookingStatusRoute)

module.exports = router