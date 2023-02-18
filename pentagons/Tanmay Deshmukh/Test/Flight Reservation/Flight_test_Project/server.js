const Router = require('../Flight_test_Project/Router/router')
const Express = require('express')
const bodyParser = require('body-parser')
var app = Express();



/**
 * 
 *Setting up The Server 
 */


app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', Router);



/**
 * 
 * Starting Server
 */


app.listen(1234, () => {
    console.log('Vist:- https://localhost:1234');
});
