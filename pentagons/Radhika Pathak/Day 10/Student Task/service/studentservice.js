const router = require('../controller/studentcontroller');
var connection = require('../db/mysqldb');

/**
 * @author Radhika
 */

/**
 * @description get all students list
 * @param {*} req 
 * @param {*} res 
 */
const getStudentList = (req, res) => {
    let q = "select * from student";
    connection.query(q, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
    /*connection.query('select * from student',(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    });*/
};

/**
 * @description create new student with record
 * @param {*} req 
 * @param {*} res 
 */
const createStudent = (req, res) => {
    let name = req.body.name;
    let address = req.body.address;
    let course = req.body.course;

    console.log(address)
    let q2 = `insert into student(name,address,course) values('${name}','${address}','${course}')`;
    connection.query(q2, (err, result) => {
        if (err) throw err;
        console.log(result);
        // res.status(200).json(result);
    });
    //to display result in JSON
    connection.query(`select * from student where name='${name}' and address='${address}' and course='${course}' `, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
}

//using static values
/*const insertstudent=(req,res)=>{
    let q2="insert into student values (1,'rom','UK','MSC');
    connection.query(q2,(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    });
}*/


/**
 * @description update student with given details
 * @param {*} req 
 * @param {*} res 
 */
const updateStudentById = (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let address = req.body.address;
    let course = req.body.course;
    console.log(id);
    connection.query(`update student set name='${name}',address='${address}',course='${course} ' where id='${id}'`,
        (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
}

/**
 * @description display records of students with given id
 * @param {*} req 
 * @param {*} res 
 */
const getStudentById = (req, res) => {
    let id = req.params.id;
    connection.query(`select * from student where id='${id}' `, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
}

/**
 * @description delete record of particular student with given id
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudentById = (req, res) => {
    let id = req.params.id;

    //to display result in JSON
    connection.query(`select * from student where id='${id}' `, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
    connection.query(`delete from student where id='${id}' `, (err, result) => {
        if (err) throw err;
        //res.status(200).json(result);
    });
}

/**
 * @description delete all students record
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllStudents = (req, res) => {
    connection.query(`delete from student`, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
}

/**
 * @description search a student by specific name
 * @param {*} req 
 * @param {*} res 
 */
const searchByName = (req, res) => {
    let name = req.params.name;
    connection.query(`select * from student where name='${name}' `, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
}

module.exports = {
                    getStudentList,
                    createStudent,
                    updateStudentById,
                    getStudentById,
                    deleteStudentById,
                    deleteAllStudents,
                    searchByName
                };