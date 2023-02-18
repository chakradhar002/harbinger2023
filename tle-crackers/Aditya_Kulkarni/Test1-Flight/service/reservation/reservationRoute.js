/**
 * @author Aditya Kulkarni
 */
const { bookReservation, updateBookingById, cancelBooking } = require("./reservation")
/**
 * Booking route
 * @param {*} req Request Object
 * @param {*} res Response Object
 */
const bookReservationRoute = async (req, res) => {
    try {
        const { customerId } = req.params
        const { flightId, mealId } = req.body
        const result = await bookReservation(customerId, flightId, mealId)
        res.json(result)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

/**
 * Update Reservation Route
 * @param {*} req Request Object
 * @param {*} res Response Object
 */
const updateReservationRoute = async (req, res) => {
    try {
        const { customerId } = req.params
        const { flightId, mealId, bookingId } = req.body
        const result = await updateBookingById(bookingId, mealId, flightId, customerId)
        res.json(result)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

/**
 * cancel Status Route
 * @param {*} req Request Object
 * @param {*} res Response Object
 */
const cancelBookingRoute = async (req, res) => {
    try {
        const { customerId } = req.params
        const { status, bookingId } = req.body
        const result = await cancelBooking(bookingId, customerId)
        res.json(result)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = { bookReservationRoute, updateReservationRoute, cancelBookingRoute }