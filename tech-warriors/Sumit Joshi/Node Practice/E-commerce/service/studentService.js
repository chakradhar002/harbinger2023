/**
 * @author
 */

const router = require('../routers/router')
var connection = require('../db/db').connection;

/**
 * @description function will get id as argument and display the information
 * @param {*} id 
 * @param {*} res 
 */
const showInfo=(id,res)=>{
    const query = `select * from studentinfo where sid='${id}' `
    connection.query(query, (err,result) => {
        if(err) throw err
        res.status(200).json(result)
        // console.log(result);
    });
};

/**
 * @description This method will give the list of all students in table
 * @param {*} req 
 * @param {*} res 
 */

const getStudentList = (req,res) =>{
    const query1 = 'select * from studentinfo';
    connection.query(query1, (err,result) => {
        if(err) throw err
        res.send(JSON.stringify(result));
    });
};

/**
 * @description This method will get the details of student by ID 
 * @param {*} req 
 * @param {*} res 
 */

const getStudentByID = (req,res)=>{
    var sid = req.params.id
    const query = `select * from studentinfo where sid=${sid}`
    connection.query(query,(err,result)=>{
        if(err) throw err
        res.status(200).json(result)
    });
};

//search by name
/**
 * @description This method will search the student details by name
 * @param {*} req 
 * @param {*} res 
 */

const getStudentByName = (req,res)=>{
    var name = req.params.name
    const query = `select * from studentinfo where name='${name}'`
    connection.query(query,(err,result)=>{
        if(err) throw err
        res.status(200).json(result)
    });
};

/**
 * @description This function will create the new student,Insert the value into table

 * @param {*} req 
 * @param {*} res 
 */
const CreateNewStudent = (req,res) => {
    var name = req.body.name
    var address = req.body.address
    const query2 = `insert into studentinfo(name ,address) values("${name}" , "${address}")`;
    connection.query(query2,(err,result)=>{
        if(err) throw err
        showInfo(result.insertId,res)
        
    });   
};

/**
 * @description This method will update the student address using id,Update the value of record

 * @param {*} req 
 * @param {*} res 
 */
const UpdateStudentByID = (req,res)=>{
    var sid = req.params.id
    var address = req.body.address
    console.log(address);
    const query = `update studentinfo set address= '${address}' where sid=${sid};`
    connection.query(query,(err,result)=>{
        if(err) throw err
        showInfo(result.insertId,res)
        res.status(200).json(result)
    });
};

/**
 * @description This method will delete student details by Id
 * @param {*} req 
 * @param {*} res 
 */
const DeleteStudentById = (req,res)=>{
    var sid = req.params.id
    const query3 = `delete from studentinfo where sid=${sid};`
    connection.query(query3,(err,result)=>{
        if(err) throw err
        console.log("rEcord deleted");
        let affectedRows = result.affectedRows
        if(affectedRows > 0){
            res.send(JSON.stringify(`Deleted row id:${sid}`))
        }else{
            res.send("No record")
        }
    });
};

/**
 * @description This method will delete all the records from the table
 * @param {*} req 
 * @param {*} res 
 */
const DeleteAllStudent = (req,res)=>{
    const query3 = `delete from studentinfo;`
    connection.query(query3,(err,result)=>{
        if(err) throw err
        console.log("record deleted");
        res.status(200).json(result)
    });
};

module.exports = {getStudentList,
                CreateNewStudent,
                UpdateStudentByID,
                DeleteStudentById,
                DeleteAllStudent,
                getStudentByID,
                getStudentByName
            };