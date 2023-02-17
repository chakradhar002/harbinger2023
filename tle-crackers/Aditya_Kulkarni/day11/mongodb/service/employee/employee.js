const { Model } = require("mongoose")
const { connectDB, closeDB } = require("../../db/mongoose_db")
const { Employee } = require("../../models/employeeSchema")

/**
 *
 * @returns {[]} array of all the employees
 */

const findAllEmployees = async () => {
	try {
		await connectDB()
		return await Employee.find({})
	} catch {
		console.log("Error while finding documents")
		return null
	} finally {
		await closeDB()
	}
}
/**
 *
 * @param {string} name name of the employee
 * @param {string} age age of the employee
 * @returns {Model} details of created employee
 */
const createEmployee = async (name, age) => {
	try {
		await connectDB()
		return await Employee.create({ name, age })
	} catch (e) {
		console.log(`Error creating employee`)
		return null
	} finally {
		await closeDB()
	}
}
/**
 *
 * @returns {{acknowleged : boolean , deletedCount : number}}
 */
const deleteAllEmployees = async () => {
	try {
		await connectDB()
		return await Employee.deleteMany({})
	} catch {
		console.log(`Error while deleting all the employees`)
		return null
	} finally {
		await closeDB()
	}
}

/**
 *
 * @param {*} id id of the Employee
 * @param {*} name name of the Employee
 * @param {*} age age of the Employee
 * @returns {Model} updated Records
 */
const updateOneProductById = async (id, name, age) => {
	try {
		await connectDB()
		return await Employee.findByIdAndUpdate(
			id,
			{ name, age },
			{
				returnDocument: "after",
			}
		)
	} catch {
		console.log(`Error while updating with id ${id}`)
	} finally {
		await closeDB()
	}
}

module.exports = {
	findAllEmployees,
	createEmployee,
	deleteAllEmployees,
	updateOneProductById,
}
