
/**
 * 
 * @author Aditya Mahajan
 * 
 */


const { json } = require('body-parser');
const { response } = require('express');
const express = require('express');
var app = express();
const router = require('../controller/studentController')
var con = require('../db/databaseConnection');

// GET
/**
 * @description Displays all records of the table
 * @param {*} req 
 * @param {*} res 
 */
const getallRecords = (req, res) => {
    con.query('select * from student', (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
}

// display function for POSTMAN

// POST
/**
 * @description insert record in table
 * @param {*} req 
 * @param {*} res 
 */
// let insertRecord = (req, res) => {
//     let name = req.body.name;
//     let age = req.body.age;
//     con.query('INSERT INTO `student` (`name`,`Age`) values (?,?)', [name,age], function (error, results, fields) {
//         if (error) throw error;
//         console.log(results.affectedRows + " rows affected")
//         let recordObj = {
//             id: results.insertID,        // id is not getting
//             name: name,
//             age: age

//         }
//         console.log(recordObj);
//         res.status(200).json(recordObj)
//         // res.send(JSON.stringify(results));
//     });
// };
let insertRecord = (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    con.query(`INSERT INTO student (name,Age) values ("${name}","${age}")`, function (error, results) {
        if (error) throw error;
        console.log(results.affectedRows + " rows affected")
        let recordObj = {
            "id": `${results.insertId}`,        // id is not getting
            "name": `${name}`,
            "age": `${age}`

        }
        console.log(recordObj);
        res.status(200).json(recordObj)
        // res.send(JSON.stringify(results));
    });
};
// PUT
/**
 * @description use to update existing data in table
 * @param {*} req 
 * @param {*} res 
 */
let updateRecord = (req, res) => {
    var updateEmp = req.body;
    con.query('update `student` SET `Age`=? where `name`=?', [updateEmp.Age, updateEmp.name], function (error, results, fields) {
        if (error) throw error;
        console.log(results.affectedRows + " rows affected")
        res.send(JSON.stringify(results));
    })
}
// delete
/**
 * @description  delete the specified record from table
 * @param {*} req 
 * @param {*} res 
 */

let deleteRecord = (req, res) => {
    var deleteEmp = req.body;
    con.query('DELETE from `student` where `name`=?', [deleteEmp.name], function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " rows affected")
        res.send(JSON.stringify(result));
    })
}

// get element by id
/**
 * @description retrives specific data from table
 * @param {*} req 
 * @param {*} res 
 */
const getelementbyid = (req, res) => {
    var getByid = req.body;
    con.query('select * from `student` where `sid`=?', [getByid.sid], (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
}

// DELETE all records
/**
 * @description delete all records from table
 * @param {*} req 
 * @param {*} res 
 */
let deleteAllRecords = (req, res) => {

    con.query('DELETE from `student`', function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " rows affected")
        res.send(JSON.stringify(result));
    })
}

// GET specfic record
/**
 * @description Search record of a particular student by name and display his information
 * @param {*} req 
 * @param {*} res 
 */
const getSpecficRecord = (req, res) => {
    var specficRecord = req.body;
    con.query('select * from `student` where `name` = ?', specficRecord.name, (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
}

module.exports = { getallRecords, insertRecord, updateRecord, deleteRecord, getelementbyid, deleteAllRecords, getSpecficRecord };
