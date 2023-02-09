const router = require('../Controller/empController');
const conn = require('../DB/mysqlDb');
var connection = require('../DB/mysqlDb')

//getEmp(get)
const getListEmp = (req,res)=>{
    connection.query('SELECT * FROM employee',(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    });
}

// Create Employee(post)
const createEmp = (req,res)=>{
    // static
    // connection.query('INSERT INTO employee(eid,ename) VALUES (1345,"Sonali G")',(err,result)=>{
    //     if(err) throw err;
    //     res.status(200).json(result);

    // dynamic
    let id = req.body.id;
    let name = req.body.name;
    connection.query('INSERT INTO employee(eid,ename) VALUES (?,?)',[id,name],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result);
    });
}

// get Employee By Id(gut)
const getEmpId = (req,res)=>{
    let id = req.body.id;
    connection.query('SELECT * FROM employee where eid = ?',[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result)
    })
}

// Update Employee
const updateEmp = (req,res)=>{
    // res.send('Update Employee')
    let id = req.body.id;
    let name = req.body.name;
    connection.query('UPDATE employee SET ename = ? WHERE eid=?',[name,id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result)
    })
}

// Delete Employee
const deleteEmp = (req,res)=>{
    // res.send('deleted')
    let id = req.body.id;
    connection.query('DELETE from employee WHERE eid = ?',[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result)
    })
}



module.exports = {
    getListEmp,
    createEmp,
    updateEmp,
    deleteEmp,
    getEmpId
}