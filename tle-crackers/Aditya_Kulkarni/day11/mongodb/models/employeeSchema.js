const { Schema, model } = require("mongoose")

const employeeSchema = new Schema({
	name: String,
	age: String,
})

const Employee = model("Employee", employeeSchema)

module.exports = { Employee }
