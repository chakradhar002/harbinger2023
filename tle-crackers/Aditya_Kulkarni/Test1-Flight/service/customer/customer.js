/**
 * @author Aditya Kulkarni
 */
const { getConnection } = require('../../db/connectdb')

/**
 * Validate the details for searchFlightDetails Function
 * @param {string} source Source of the flight
 * @param {string} destination Destination of flight
 * @param {string} startdate Startdate of the Flight -> YYYY-MM-DD Format
 * @param {string} enddate Enddate of the flight -> YYYY-MM-DD Format
 * @returns {void} 
 */

const validateFlightDetails = (source, destination, startdate, enddate) => {
	if (source == null) {
		throw new Error('Source cannot be empty')
	} else if (destination == null) {
		throw new Error('Destination cannot be empty')
	} else if (startdate == null) {
		throw new Error('Startdate cannot be empty')
	} else if (enddate == null) {
		throw new Error('Enddate cannot be empty')
	}
}

/**
 * Find the customer in database according to the ID
 * @param {number} id Unique Customer ID
 * @returns {RowDataPacket} Unique Customer according to ID
 */

const findCustomerById = async id => {
	const sqlQuery = `select * from customer where cid = ${id}`
	try {
		const [result] = await (await getConnection()).query(sqlQuery)
		return result
	} catch (e) {
		throw new Error(`Error during fetching individual customer ${e} `)
	}
}

/**
 * 
 * @param {string} source Source of the flight
 * @param {string} destination Destination of flight
 * @param {string} startdate Startdate of the Flight -> YYYY-MM-DD Format
 * @param {string} enddate Enddate of the flight -> YYYY-MM-DD Format
 * @returns {RowDataPacket} All the flights in the above conditions
 */

const searchFlightDetails = async (source, destination, startdate, enddate) => {
	try {
		validateFlightDetails(source, destination, startdate, enddate)
		const sqlQuery = `select * from flight where source='${source}' and destination='${destination}' and startdate='${startdate}' and enddate<='${enddate}'`
		const [result] = await (await getConnection()).query(sqlQuery)
		return result
	} catch (e) {
		throw new Error(`Error during searching flight ${e} `)
	}

}

module.exports = { findCustomerById, searchFlightDetails }
