const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4040

app.use(bodyParser.json())

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/swapping.html')
})

app.post('/swapping', (req, res) => {
	let { firstNumber, secondNumber } = req.body

	firstNumber = Number(firstNumber)

	secondNumber = Number(secondNumber)

	let beforeSwapping = `Before swapping : ${firstNumber}, ${secondNumber}`

	firstNumber = firstNumber + secondNumber
	secondNumber = firstNumber - secondNumber
	firstNumber = firstNumber - secondNumber

	res.send(
		`${beforeSwapping} and  After swapping : ${firstNumber}, ${secondNumber}`
	)
})

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`)
})
