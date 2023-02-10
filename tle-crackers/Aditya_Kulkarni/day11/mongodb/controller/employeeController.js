const express = require("express")
const {
	findAllEmployeesRoute,
	createEmployeeRoute,
	updateProductByIdRoute,
	deleteAllEmployeesRoutes,
} = require("../service/employee/employeeService")

const router = express.Router()

// /employee routes

router.get("/getemployeelist", findAllEmployeesRoute)
router.post("/createemployee", createEmployeeRoute)
router.put("/updateemployee/:id", updateProductByIdRoute)
router.delete("/deleteallemployee", deleteAllEmployeesRoutes)

module.exports = router
