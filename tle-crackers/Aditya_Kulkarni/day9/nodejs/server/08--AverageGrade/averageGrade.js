const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4040

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/averageGrade.html')
})

app.post('/averagegrade', (req, res) => {
	let { number1, number2, number3, number4 } = req.body

	let physics = Number(number1)

	let chemistry = Number(number2)

	let biology = Number(number3)

	let math = Number(number4)

	let sumOfAllMarks = physics + chemistry + biology + math

	let avg = (sumOfAllMarks / 400) * 100

	if (avg <= 70) {
		return res.send(`Grade D`)
	} else if (avg < 80) {
		return res.send(`Grade C`)
	} else if (avg < 90) {
		return res.send(`Grade B`)
	} else {
		return res.send(`Grade A`)
	}
})

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`)
})
