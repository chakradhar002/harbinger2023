const {
	findAllEmployees,
	createEmployee,
	updateOneProductById,
	deleteAllEmployees,
} = require("./employee")
/**
 *
 * @param {*} req Request Object
 * @param {*} res Response Object
 */
const findAllEmployeesRoute = async (req, res) => {
	let result = await findAllEmployees()
	if (result == null) {
		res.status(500).send({ error: "this is a error" })
	} else {
		res.send(result)
	}
}

/**
 *
 * @param {*} req Request Object
 * @param {*} res Response Object
 */
const createEmployeeRoute = async (req, res) => {
	let { name, age } = req.body
	const result = await createEmployee(name, age)
	if (result == null) {
		res.status(500).send({ error: "Error while creating" })
	} else {
		res.send(result)
	}
}
/**
 *
 * @param {*} req Request Object
 * @param {*} res Response Object
 */
const updateProductByIdRoute = async (req, res) => {
	let id = req.params.id
	let { name, age } = req.body
	const result = await updateOneProductById(id, name, age)
	if (result == null) {
		res.status(500).send({ error: "Error while updating " })
	} else {
		res.send(result)
	}
}


/**
 *
 * @param {*} req Request Object
 * @param {*} res Response Object
 */
const deleteAllEmployeesRoutes = async (req, res) => {
	const result = await deleteAllEmployees()
	if (result == null) {
		res.status(500).send({ error: "Error while deleting" })
	} else {
		res.send(result)
	}
}

module.exports = {
	findAllEmployeesRoute,
	createEmployeeRoute,
	updateProductByIdRoute,
	deleteAllEmployeesRoutes,
}
