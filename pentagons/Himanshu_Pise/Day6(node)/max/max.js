const epxress = require('express')

const app = epxress();

app.use(epxress.json())

const PORT = process.env.PORT || 4040;

app.use(epxress.urlencoded({
    extended : true
}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/max.html')
})

app.post('/maxmumber', (req, res)=>{
    let first = req.body.fname;
    let second = req.body.lname;

    first = Number(first);
    second = Number(second)

    const highestNumber = first > second ? first : second;
    res.send(`Highest Number is: ${highestNumber} </h1>`)

    console.log(first, second)

})
app.listen(PORT, ()=>{
    console.log(`Listening on port http://localhost:${PORT}`);
})