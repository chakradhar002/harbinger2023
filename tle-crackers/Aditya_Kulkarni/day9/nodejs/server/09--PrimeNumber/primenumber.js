const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4040

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/primenumber.html')
})

app.post('/primenumber', (req, res) => {
	let { number } = req.body
	let checkForPrimeNumber = number
	let totalDivision = 0

	for (let i = 2; i <= checkForPrimeNumber; i++) {
		if (checkForPrimeNumber % i == 0) {
			totalDivision++
		}
	}

	if (totalDivision == 1) {
		return res.send(`The number ${checkForPrimeNumber} is PRIME`)
	} else {
		return res.send(`The number ${checkForPrimeNumber} is NOT PRIME`)
	}
})

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`)
})
