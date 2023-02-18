/**
 * @author Aditya Kulkarni
 */
const { searchFlightDetails } = require("./customer")

/**
 * Search Based Route -> Customer
 * @param {Request} req Request Object
 * @param {Response} res Response Object 
 */
const customerSearchRoute = async (req, res) => {
    try {
        const { source, destination, startdate, enddate } = req.query
        const result = await searchFlightDetails(source, destination, startdate, enddate)
        res.json(result)
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}

module.exports = { customerSearchRoute }