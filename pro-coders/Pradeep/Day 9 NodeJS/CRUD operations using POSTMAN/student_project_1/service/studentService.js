const connection = require('../databese/student_database');
var router = require('../controller/studentController');
const { response } = require('express');

/**
 * @author Pradeep PRAJAPATI
 */

/**
 * @description : GET request to show table contants.
 * @param {*} req 
 * @param {*} res 
 */
const getStudentList = (req, res) => {
    connection.query('select * from mytable1', (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    });
};

/**
 * @description : POST request to update a new record.
 * @param {*} req 
 * @param {*} res 
 */
let insertStudent = (req, res) => {
    const id = req.body.ID; 
    const p_name = req.body.P_Name;
    const city = req.body.city;
    connection.query('INSERT into `mytable1` (ID,P_Name,city) values (?,?,?)', [id, p_name, city], (err,result) => {
        if(err) throw err;
        //res.send(JSON.stringify(result));
        res.status(200).json(result);
    })
}

/**
 * @description : Upadte one record 
 * @param {*} req 
 * @param {*} res 
 */
let updateStudent = (req, res) => {
    const id = req.body.ID;
    const p_name = req.body.P_Name;

    console.log(id,p_name)
    connection.query(`UPDATE mytable1 SET P_Name = ? WHERE ID = ? `, [p_name, id], (err, result) => {
    if(err) throw err;
        //res.sent(JSON.stringify(result)); 
        res.status(200).json("updated " + id);
        console.log(err);
    });
}

/**
 * @description : Delete one record by ID
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudentById = (req, res) => {
    const id = req.body.ID;
    connection.query(`DELETE from mytable1 WHERE ID = ? `, [id], (err, result) => {
        if(err) throw err;
        console.log("record deleted");
        res.status(200).json(result);

    });
}

/**
 * @description : Delete all record of the table.
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllStudent = (req, res) => {
    connection.query(`DELETE FROM mytable1; `, (err, result) => {
        if(err) throw err; 
        res.status(200).json(result);
    })
}

/**
 * @description : Fetch record by Id
 * @param {*} req 
 * @param {*} res 
 */
const getStudentById = (req, res) => {
    let id = req.body.ID;
    connection.query(`SELECT * from mytable1 where ID = ?`, [id], (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    })
}

/**
 * @description : Fetch student record by name
 * @param {*} req 
 * @param {*} res 
 */
const getStudentByName = (req, res) => {
    let name = req.body.P_Name;
    connection.query(`SELECT * from mytable1 where P_Name = ? `, [name], (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    })
}

module.exports = {
    getStudentList,
    insertStudent,
    updateStudent,
    deleteAllStudent,
    getStudentById,
    getStudentByName, 
    deleteStudentById
};