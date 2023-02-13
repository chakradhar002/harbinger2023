const { MongoClient } = require("mongodb")

/**
 *
 * @param {MongoClient} client MongoClient instance
 */
const connect = async client => {
	try {
		await client.connect()
		console.log(" Client Connected Successfully ")
	} catch {
		console.error("Error : Client connection failed")
	}
}
const close = async client => {
	try {
		await client.close()
		console.log("client closed successfully")
	} catch {
		console.error("Error during closing client")
	}
}

/**
 *  @description create a collection
 * @param {MongoClient} client MongoClient Instance
 */
const createCollection = async client => {
	try {
		const db = client.db()
		await db.createCollection("people")
		console.log("Created people successfully")
	} catch (e) {
		console.log(e)
	}
}
const main = async () => {
	const mongoDBUrl = `mongodb://localhost:27017/training`
	const client = new MongoClient(mongoDBUrl)
	await connect(client)
	await createCollection(client)
	close(client)
}

main()
