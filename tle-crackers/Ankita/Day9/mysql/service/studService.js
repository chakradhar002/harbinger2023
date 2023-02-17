const router = require('../controller/studentController')
var conn = require('../db/createdb')
const getallstudents = (req, res) => {
   
    conn.query('select * from students',(err, result)=> {
     if(err) throw err;
     res.status(200).json(result);

 });
 
};

module.exports = ({getallstudents});