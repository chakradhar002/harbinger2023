const router =  require('../empcontroller')
var connection  = require('../db/mysqldb');


const getEmployeeList = (req, res) => {
   
       connection.query('SELECT * FROM customers',(err, result)=> {
        if (err) throw err;
        res.status(200).json(result);

    });

	console.log("hello")
    
  };

 module.exports = {getEmployeeList};