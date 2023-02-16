const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4040

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/fizzbuzz.html')
})

app.post('/fizzbuzz', (req, res) => {
	let { number1 } = req.body

	number1 = Number(number1)

	if (number1 % 3 == 0 && number1 % 5 == 0) {
		return res.send(`FizzBuzz`)
	}
	if (number1 % 3 == 0) {
		return res.send(`Fizz`)
	}

	if (number1 % 5 == 0) {
		return res.send(`Buzz`)
	}
})

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`)
})
