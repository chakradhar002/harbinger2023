const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4040

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/landscape.html')
})

app.post('/landscapeportrait', (req, res) => {
	let { width, height } = req.body

	width = Number(width)
	height = Number(height)

	if (width == '' || height == '') {
		return res.send('Invalid input')
	}

	if (width > height) {
		return res.send('Orientation is LANDSCAPE')
	} else {
		return res.send('Orientation is PORTRAIT')
	}
})

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`)
})
