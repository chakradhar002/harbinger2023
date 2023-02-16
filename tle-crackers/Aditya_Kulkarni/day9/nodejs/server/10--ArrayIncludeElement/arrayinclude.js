const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4040

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/arrayinclude.html')
})

app.post('/arrayinclude', (req, res) => {
	let userInputNumber = req.body.number

	userInputNumber = Number(userInputNumber)

	let array = [10, 20, 30, 40, 50]

	let isElementPresent = array.includes(userInputNumber)

	isElementPresent
		? res.send(`The element ${userInputNumber} is PRESENT in the given array`)
		: res.send(
				`The element ${userInputNumber} is NOT PRESENT in the given array`
		  )
})

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`)
})
