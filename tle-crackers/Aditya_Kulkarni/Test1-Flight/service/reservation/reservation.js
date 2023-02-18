/**
 * @author Aditya Kulkarni
 */
const { getConnection } = require("../../db/connectdb")
/**
 * @description validate function for bookReservation
 * @param {number} customerId main identifier for the customer
 * @param {number} flightId main identifier for the flights
 * @param {number} mealId main identifier for the meals 
 */
const validateBooking = (customerId, flightId, mealId) => {
    if (customerId == null) {
        throw new Error('Customer Id should not be empty')
    } else if (flightId == null) {
        throw new Error('Flight Id should not be empty')
    } else if (mealId == null) {
        throw new Error('Meal Id should not be null')
    }
}

/**
 * 
 * @param {number} customerId main identifier for the customer
 * @param {number} flightId main identifier for the flights
 * @param {number} mealId main identifier for the meals 
 * @returns {RowDataPacket} result -> getting all the results
 */
const bookReservation = async (customerId, flightId, mealId) => {
    validateBooking()
    try {
        const sqlQuery = `insert into booking (cid , fid , mid , status) values ("${customerId}", "${flightId}" , "${mealId == undefined ? 3 : mealId}" , "BOOK")`
        const [results] = await (await getConnection()).query(sqlQuery)
        const [result] = await getBookingDetailsById(results.insertId)
        return result
    } catch (e) {
        throw new Error(`Error during booking a reservation : ${e.message}`)
    }
}

/**
 * Getting the details by passing the unique bookingId
 * @param {number} customerId main identifier for the customer
 * @param {number} flightId main identifier for the flights
 * @param {number} mealId main identifier for the meals 
 * @returns {RowDataPacket} result -> getting all the results
 */

const getBookingDetailsById = async bookingId => {
    try {
        const sqlQuery = `select booking.bid , customer.cname , flight.fname , meals.mname , booking.status
        from booking , customer , flight , meals
    where booking.bid = ${bookingId} and customer.cid = booking.cid and flight.fid = booking.fid and meals.mid = booking.mid`

        const [result] = await (await getConnection()).query(sqlQuery)
        return result
    } catch (e) {
        throw new Error(`Error during a Fetching a Booking : ${e.message}`)
    }

}

/**
 * 
 * @param {*} bookingId main identifier for the booking
 * @param {number} customerId main identifier for the customer
 * @param {number} flightId main identifier for the flights
 * @param {number} mealId main identifier for the meals 
 * @returns {RowDataPacket} result fetching from the database 
 */
const updateBookingById = async (bookingId, mealId, flightId, customerId) => {
    try {
        const sqlQuery = `update booking set mid = ${mealId == undefined ? 3 : mealId} , fid = ${flightId} where bid = ${bookingId} and cid = ${customerId}`
        const [results] = await (await getConnection()).query(sqlQuery)
        const [result] = await getBookingDetailsById(bookingId)
        return result
    } catch (e) {
        throw new Error(`Error during a Updating a Booking : ${e.message}`)
    }
}

/**
 * 
 * @param {*} status status of booking which is to be updated
 */
const validateStatus = status => {
    const validStatus = ["AVAIL", "BOOK", "CANCEL"]
    if (!validStatus.includes(status)) {
        throw new Error('Status should only be AVAIL | BOOK  | CANCEL')
    }
}

/**
 * Cancellation of the booking 
 * @param {number} bookingId main identifier for the booking
 * @param {number} customerId main identifier for the customer
 * @returns {RowDataPacket} result fetching from the database 
 */
const cancelBooking = async (bookingId, customerId) => {
    try {
        const sqlQuery = ` update booking set status = "CANCEL" where bid = ${bookingId} and cid = ${customerId}`
        const [results] = await (await getConnection()).query(sqlQuery)
        const [result] = await getBookingDetailsById(bookingId)
        return result
    } catch (e) {
        throw new Error(`Error during a Updating a Booking Status: ${e.message}`)
    }
}

module.exports = { bookReservation, updateBookingById, cancelBooking }