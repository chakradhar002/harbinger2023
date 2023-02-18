const { resolve } = require('dns/promises');
const router = require('../controller/stdcontroller')
const connection = require('../db/mysqldb');

/**
 * @description :Show Student list
 * @param {*} req 
 * @param {*} res 
 */
const getStudentList = (req, res) => {

    connection.query('SELECT * FROM students', (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });

};

/**
 * @description :Insert data in studentlist
 * @param {*} req 
 * @param {*} res 
 */

const insertStudentInfo = (req, res) => {
    var name = req.body.name;
    var stream = req.body.stream;
    const q1 = `insert into students(name,stream) values ('${name}','${stream}');`
    connection.query(q1, (err, result) => {
        if (err) throw err
        getDataById(result.insertId, res);

    });

};

/**
 * @description :get student details by id/rolllnumber from studentlist
 * @param {*} req 
 * @param {*} res 
 */
const getDataById = (insertId, res) => {
    let viewQuery = `SELECT * FROM students where rollnumber='${insertId}'`;

    connection.query(viewQuery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });

}



/**
 * @description :update students details by id/rollnumber in studentlist
 * @param {*} req 
 * @param {*} res 
 */
const updateStudent = (req, res) => {
    var name = req.body.name;
    var rollnumber = req.params.rollnumber;
    let updateQuery = `update students set name='${name}' where rollnumber='${rollnumber}'`;

    connection.query(updateQuery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });

}

/**
 * @description :Delete student Details By id
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudentById = (req, res) => {
    var rollnumber = req.params.rollnumber;
    let deleteQuery = `DELETE FROM STUDENTS where rollnumber='${rollnumber}'`;

    connection.query(deleteQuery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
        // console.log("1 row deleted");

    });

}

/**
 * @description :Search student by their name in studentlist
 * @param {*} req 
 * @param {*} res 
 */
const searchByName = (req, res) => {
    var name = req.params.name;
    let searchQuery = `SELECT * FROM students where name="${name}" `;

    connection.query(searchQuery, (err, result) => {
        if (err) throw err;

        console.log(result);
        console.log('search')
        res.status(200).json(result);


    });


}
/**
 * @description :search students details by id/rollnumber in studentlist
 * @param {*} req 
 * @param {*} res 
 */

const getStudentById = (req, res) => {
    var rollnumber = req.params.rollnumber;
    let getQuery = `SELECT * FROM students where rollnumber = ${rollnumber}`;
    connection.query(getQuery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });

}
/**
 * @description :delete studen list
 * @param {*} req 
 * @param {*} res 
 */
//Delete All Student
const deleteAllStudent = (req, res) => {
    let deleteAllquery = `DELETE FROM students`;

    connection.query(deleteAllquery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
        // console.log("1 row deleted");

    });

}


module.exports = {
    getStudentList,
    insertStudentInfo,
    updateStudent,
    deleteStudentById,
    searchByName,
    getStudentById,
    deleteAllStudent
};