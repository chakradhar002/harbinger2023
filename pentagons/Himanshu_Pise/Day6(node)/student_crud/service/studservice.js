const router =  require('../controller/studcontroller')
var connection  = require('../db/connection');


const postStudentList = (req, res) => {

       connection.query('SELECT * FROM stud_data',(err, result)=> {
        if (err) throw err;
        res.status(200).json(result);
    });

  };





 module.exports = {postStudentList};