const router = require('../Controller/studentController');
const conn = require('../DB/mysql');


/**
 * @getAllStudent
 * @param {*} req 
 * @param {*} res 
 */
const getStudent = (req,res)=>{
    conn.query('select * from student',(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    });
}

module.exports = {
    getStudent
}