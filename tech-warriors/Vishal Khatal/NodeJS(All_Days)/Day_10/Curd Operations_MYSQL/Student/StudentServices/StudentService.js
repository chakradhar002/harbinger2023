const { response } = require("express");
const { request } = require("http");
let route = require("../StudentController/StudentController");
let con = require("../StudentDataBase/StudentMySQLDataBase");


/**
 * @description this method is showing details of student by id  into student table. -get
 * @param {*} request 
 * @param {*} response 
 */
let getStudentById = (request, response) => { //service name:
    let id = request.body.id;
    var sql = `select * from student where studentId = "${id}"`;
    con.query(sql,(err , result)=> {
        if (err) throw err;
        response.status(200).json(result);
    });
};

/**
 * @description this method will search by name in student table.
 * @param {*} request 
 * @param {*} response 
 */
let searchStudentByName = (request, response) => { //service name:
    let name = request.body.name;
    var sql = `select * from student where studentName = "${name}"`;
    con.query(sql,(err , result)=> {
        if (err) throw err;
        response.status(200).json(result);
    });
};
/**
 * @description this method will show all details of student table.
 * @param {*} request 
 * @param {*} response 
 */
let getStudentList = (request, response) => { //service name:
    con.query("select * from student ",(err , result)=> {
        if (err) throw err;
        response.status(200).json(result);
    });
};


/**
 * @description this method is inserting  into student table.
 * @param {*} request 
 * @param {*} response 
 */
let createStudentInfo = (request, response) => { //service name:

    let studentName = request.body.name;
    let studentAddress = request.body.address;
    var sql = `INSERT INTO student (studentName, studentAddress) VALUES ("${studentName}", "${studentAddress}")`;
    con.query(sql, function (err, result){
        if (err) throw err;
        
        let showDetails = {
            "id" : `${result.insertId}`,
            "name": `${studentName}`,
            "address":`${studentAddress}`
        }
        console.log(showDetails);
        response.status(200).json(showDetails);
    });
};


/**
 * @description this method is updating according to id  into student table.
 * @param {*} request 
 * @param {*} response 
 */
let updateStudentById = (request, response) => {
    let id =request.body.id;
    let address = request.body.address;

    let sql = `Update student SET studentAddress = "${address}" where studentId ="${id}";`
    con.query(sql, function (err, result) {
        if (err) throw err;
        let showDetails1 = {
            "id" : `${id}`,
            "address":`${address}`
        }
        console.log(result.affectedRows + " record(s) updated");
        response.status(200).json(result);
      });
      
}


/**
 * @description this method will delete a perticular row according to id .
 * @param {*} request 
 * @param {*} response 
 */
let deleteStudentById = (request,response) =>
{
    let output ;
    let id = request.body.id;

    con.query(`select * from student where studentId = "${id}";`,(err , result)=> {
        if (err) throw err;
         output = result
    });


    
    let sql =  `DELETE FROM student WHERE studentId = "${id}"`
    con.query(sql, function (err, result) {
        if (err) throw err;
        response.status(200).json(output);
      });
}


/**
 * @description this method will delete all data of student
 * @param {*} request 
 * @param {*} response 
 */
let deleteAllStudent = (request,response) =>
{
    let sql =  `DELETE FROM student `;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("deleted");
      });
}

module.exports = {getStudentById,
            getStudentList,
            createStudentInfo,
            updateStudentById,
            deleteStudentById,
            deleteAllStudent,
            searchStudentByName};