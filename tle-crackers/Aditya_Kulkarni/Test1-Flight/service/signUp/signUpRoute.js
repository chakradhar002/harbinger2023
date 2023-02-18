/**
 * @author Aditya Kulkarni
 */
const { signUpCustomer } = require('./signUp')
const { findCustomerById } = require('../customer/customer')
/**
 * The sign up route
 *
 * @param {Request} req Request Object
 * @param {Response} res Response Object
 */
const signUpRoute = async (req, res) => {
	try {
		const { name, email, password } = req.body
		let result = await signUpCustomer(name, email, password)
		const response = await findCustomerById(result.insertId)
		res.json(response)
	} catch (e) {
		res.status(400).json({ error: `${e.message}` })
	}
}

module.exports = { signUpRoute }
