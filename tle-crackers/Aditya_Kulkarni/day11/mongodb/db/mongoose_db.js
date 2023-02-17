const mongoDBUrl = `mongodb://localhost:27017/training`
const { connect, connection, set } = require("mongoose")

set("strictQuery", false)

const connectDB = async () => {
	try {
		await connect(mongoDBUrl)
		console.log("Connected Successfully")
	} catch {
		console.log("Could not Connect Successfully")
	}
}

const closeDB = async () => {
	try {
		await connection.close()
		console.log("Connection Closed Successfully")
	} catch {
		console.log("Error : Could not close successfully")
	}
}
module.exports = {
	connectDB,
	closeDB,
}
