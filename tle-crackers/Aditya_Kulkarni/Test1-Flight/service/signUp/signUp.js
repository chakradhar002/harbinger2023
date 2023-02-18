/**
 * @author Aditya Kulkarni
 */
const { getConnection } = require('../../db/connectdb')
const validator = require('validator').default
class SignUpError extends Error {
	constructor(error) {
		super(error)
	}
}

const signUpCustomer = async (name, email, password) => {
	if (!name || !email || !password) {
		throw new SignUpError('Missing Required Params')
	} else if (!validator.isEmail(email)) {
		throw new SignUpError('Email Not Valid')
	} else {
		const sqlQuery = `insert into customer (cname , email , password) values("${name}", "${email}" ,"${password}")`
		try {
			const [result, fields] = await (await getConnection()).query(sqlQuery)
			return result
		} catch (e) {
			throw new SignUpError(`Failed to Create a new Customer : ${e.message}`)
		}
	}
}

module.exports = { signUpCustomer }
