let express = require('express')
// let swap = require('../Swapping/swappcontroller')
let bodyParser = require('body-parser');
const { request } = require('http');
const { response } = require('express');
let app = express()

app.use( express.json());
app.use( express.urlencoded( { extended:true } ) );
app.use('/swapping', swapping);


app.listen(3032, () => {
    console.log("Port:3032");
});


var router = express.Router();
router.put("/swappnumbers",service.swappnumbers);
module.exports = router;
let swappnumbers = (request,response) =>
{
    let n1 = request.body.number1;
    let n2 = request.body.number1;
     [n1,n2] = [n2,n1];
     let show ={
        "number 1 :":n1,
        "number 2 :":n2
     }
     response.status(200).json(show);
};