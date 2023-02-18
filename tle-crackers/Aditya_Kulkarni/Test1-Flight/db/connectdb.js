/**
 * @author Aditya Kulkarni
 */
const mysql = require('mysql2/promise')

/**
 * 
 * @returns {mysql.Connection} returns the connection object
 */
const getConnection = async () => {
	const conn = await mysql.createConnection({
		user: 'root',
		password: 'root',
		port: 3306,
		database: 'test1flight',
	})

	return conn
}

module.exports = { getConnection }
