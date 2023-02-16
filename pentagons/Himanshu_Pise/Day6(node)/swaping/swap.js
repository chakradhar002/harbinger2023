const epxress = require('express')

const app = epxress();

app.use(epxress.json())

const PORT = process.env.PORT || 4040;



app.use(epxress.urlencoded({
    extended : true
}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/abc.html')
})

app.post('/swapping', (req, res)=>{
    let first = req.body.fname;
    let second = req.body.lname;

    first = Number(first);
    second = Number(second)

    first = first + second;
    second = first - second;
    first = first - second;

    res.send(`<h1>First : ${first} and second : ${second} </h1>`)

    console.log(first, second)

})

app.listen(PORT, ()=>{
    console.log(`Listening on port http://localhost:${PORT}`);
})