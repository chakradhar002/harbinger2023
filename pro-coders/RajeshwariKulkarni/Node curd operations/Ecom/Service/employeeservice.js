const { json } = require('body-parser');
const router = require('../Controller/employeecontroller');
const conn = require('../DB/mysqldb');
var connection = require('../DB/mysqldb')

/**
 *@author Rajeshwari Kulkani
 */


/**
 * @ All employee details
 * @param {*} req 
 * @param {*} res 
 */
const getListEmp = (req, res) => {
    connection.query('SELECT * FROM employee', (err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
}

/**
 * @ Create Employee(method : post)
 * @param {*} req 
 * @param {*} res 
 */
const createEmp = (req, res) => {
    // let id = req.body.id;
    let name = req.body.name;
    let address = req.body.address;
    connection.query('INSERT INTO employee(ename,address) VALUES (?,?)', [name, address], (err, result) => {
        if (err) throw err;
        // res.status(200).json(result.insertedId);
        else {
            let id = result.insertId;
            console.log(id)
            getEmpId(req, res, id);
        }

    });
}

/**
 * @ get employee By Id(method : get)
 * @param {*} req 
 * @param {*} res 
 */
const getEmpId = (req, res, id) => {
    // let id = req.body.id;
    connection.query('SELECT * FROM employee where eid = ?', [id], (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
}

/**
 * @ get Employee by Name (method:get)
 * @param {*} req 
 * @param {*} res 
 */
const getEmpName = (req, res) => {
    let name = req.body.name;
    connection.query('SELECT * FROM employee where ename = ?', [name], (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
}


/**
 * @ Update Employee(method : put)
 * @param {*} req 
 * @param {*} res 
 */
const updateEmp = (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    connection.query('UPDATE employee SET ename = ? WHERE eid=?', [name, id], (err, result) => {
        if (err) throw err;
        // res.status(200).json(result)
        getEmpId(req, res, id);

    })
}

/**
 * @ Delete Employee(method : delete)
 * @param {*} req 
 * @param {*} res 
 */
const deleteEmp = (req, res) => {
    // res.send('deleted')
    let id = req.body.id;
    connection.query('DELETE from employee WHERE eid = ?', [id], (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
        
    })
}


/**
 * @ Delete all
 * @param {*} req 
 * @param {*} res 
 */
const deleteAll = (req, res) => {
    connection.query('DELETE FROM employee', (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
    })
}



/**
 * Exporting all modules
 */
module.exports = {
    getListEmp,
    createEmp,
    updateEmp,
    deleteEmp,
    getEmpId,
    deleteAll,
    getEmpName
};