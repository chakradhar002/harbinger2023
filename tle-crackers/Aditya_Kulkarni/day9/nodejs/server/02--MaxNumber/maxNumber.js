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
	res.sendFile(__dirname + '/maxNumber.html')
})

app.post('/maxnumber', (req, res) => {
	let { number1, number2, number3 } = req.body

	number1 = Number(number1)
	number2 = Number(number2)
	number3 = Number(number3)

	let maximumNumber = Math.max(number1, Math.max(number2, number3))

	console.log(`Maximum Number is : ${maximumNumber}`)

	res.send(`Maximum Number is : ${maximumNumber}`)
})

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`)
})
