/**
 * 
 * @author: Anushree Gore
 */
const Connection = require('../Db/mysqldb');
const router = require('../Controller/studentController');
var con = require('../Db/mysqldb.js');
const { json } = require('body-parser');

/**
 * @description Get student list from db
 * @param {*} req 
 * @param {*} res 
 */
const getStudentList = (req,res) => {
    con.query('SELECT * FROM STUDENT',(err,result)=>{
        if (err) throw err;
        // console.log('Student List');
        res.status(200).json(result);
    })
}


/**
 * @description Insert student data into db
 * @param {*} req 
 * @param {*} res 
 */
const insertStudent = (req,res) => {
    let name = req.body.sname;
    let address = req.body.saddress;
    let insertQuery = `insert into student (sname, saddress) values ('${name}','${address}')`;

    con.query(insertQuery, (err, data)=>{        
        if(err) throw err;
        searchById(data.insertId,req,res);
    })
}


/**
 * @description Get student data from student id
 * @param {*} req 
 * @param {*} res 
 */
const searchById = (insertId, req,res) =>{
    
    let searchQuery = `select * from student where sid = '${insertId}'`;
    con.query(searchQuery, (err,data)=>{
        if(err) throw err;
        console.log('Data inserted');
        res.status(200).json(data);
    })
}


/**
 * @description Update student data into db
 * @param {*} req 
 * @param {*} res 
 */
const updateStudent = (req,res) =>{
    let name = req.body.sname;
    let id = req.params.sid;
    let updateQuery = `update student set sname = '${name}' where sid = ${id}`;

    con.query(updateQuery, (err,data)=>{
        if(err) throw err;
        console.log('Data updated');
        res.status(200).json(data);
    })
}


/**
 * @description Delete student data using id from db
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudentById = (req,res) =>{
    let id = req.params.sid;
    let deleteQuery = `delete from student where sid = ${id}`;

    con.query(deleteQuery, (err,data)=>{
        if(err) throw err;
        console.log('Data deleted');
        res.status(200).json(data);
    })
}


/**
 * @description Delete all student data form db
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllStudents = (req,res)=>{
    let deleteAllQuery = `delete from student`
    con.query(deleteAllQuery, (err,data)=>{
        if(err) throw err;
        console.log('All data deleted');
        res.status(200).json(data)
    })

}


/**
 * @description Get student data using id from db
 * @param {*} req 
 * @param {*} res 
 */
const getElementById = (req,res)=>{
    let id = req.params.sid;
    let getIdQuery = `select * from student where sid = ${id}`;

    con.query(getIdQuery, (err,data)=>{
        if(err) throw err;

        res.status(200).json(data);
    })
}



/**
 * @description Search student by name from db
 * @param {*} req 
 * @param {*} res 
 */
const searchStudentByName = (req,res)=>{
    let name = req.params.sname;
    let searchByName = `select * from student where sname = "${name}"`;

    con.query(searchByName, (err,data)=>{
        if(err) throw err;
        res.status(200).json(data);
    })
}
    
module.exports = {
                    getStudentList ,
                    insertStudent,
                    updateStudent,
                    deleteStudentById,
                    deleteAllStudents,
                    getElementById,
                    searchStudentByName
            };
