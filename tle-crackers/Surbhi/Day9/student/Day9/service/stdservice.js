const router =  require('../controller/stdController')
var connection  = require('../db/mysqldb');


const getStudentList = (req, res) => {
   
       connection.query('SELECT * FROM students',(err, result)=> {
        if (err) throw err;
        res.status(200).json(result);
    });
    
  };





 module.exports = {getStudentList};