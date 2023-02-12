
const router = require('../Getalldatafromdatabase/controller')
const con = require("../Getalldatafromdatabase/db")



function GetDetails(req,res){
    let id = req.params.id
    con.query(`SELECT * FROM harbinger.student where id = '${id}'`,(err, result)=> {
            if (err) throw err;
            return res.status(200).json(result)
        })
}

/**
 * @description getStudentlist gets the List of all Student
 * @param {*} req 
 * @param {*} res 
 */
const getStudentlist =(req,res) => {
    con.query('SELECT * FROM harbinger.student',(err, result)=> {
            if (err) throw err;
            res.status(200).json(result);})
}

/**
 * @description getStudentByName fuction gets student detais by Students name
 * @param {*} req 
 * @param {*} res 
 */
const getStudentByName =(req,res) => {
    let name = req.params.name
    con.query(`SELECT * FROM harbinger.student where name = '${name}'`,(err, result)=> {
            if (err) throw err;
            res.status(200).json(result);})
   }



/**
 * @description Createstudent is Used to create a New Student
 * @param {*} req 
 * @param {*} res 
 */
const Createstudent = (req,res) => {
    var name = req.body.name
    var position = req.body.position
    let sql = `insert into student (name, position) values ('${name}', '${position}')`
     con.query(sql,(err, result)=> {
             if (err) throw err;
            })
    
             con.query(`SELECT * FROM harbinger.student where name ='${name}' and position ='${position}'`,(err, result)=> {
                if (err) throw err;
                res.status(200).json(result);})
    
            }

/**
 * @description updateStudent is used to update the details of student with student id 
 * @param {*} req 
 * @param {*} res 
 */        
const updateStudent =(req,res) => {
    
    let id = req.params.id
    let name = req.body.name
    let position = req.body.position

    console.log(id)
    con.query(`UPDATE student SET name='${name}', position='${position}' WHERE id='${id}';`,(err, result)=> {
            if (err) throw err;
        })

    con.query(`select * from student where id ='${id}' `,(err, result)=> {
        if (err) throw err;
        res.status(200).json(result);})
}



/**
 * @description deleteAllStudent This function is used to delete all the students 
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllStudent =(req,res) => {
    con.query('Delete FROM harbinger.student;',(err, result)=> {
            if (err) throw err;
            res.status(200).json(result);})


}


/**
 * @description getStudentById This function gets Student details by id
 * @param {*} req 
 * @param {*} res 
 */
const getStudentById =(req,res) => {
    let id = req.params.id
    con.query(`SELECT * FROM harbinger.student where id ='${id}'`,(err, result)=> {
            if (err) throw err;
            res.status(200).json(result);})
}



/**
 * @description deleteStudentById This function deletes Student  by id
 * @param {*} req 
 * @param {*} res 
 */

const deleteStudentById =(req,res) => {
    
    // let id = req.params.id
    // con.query(`SELECT * FROM harbinger.student where id ='${id}'`,(err, result)=> {
    //     if (err) throw err;
    //     res.status(200).json(result);})

     let output =GetDetails(req,res)
     console.log(output)
    con.query(`Delete FROM harbinger.student where id ='${id}'`,(err, result)=> {
            if (err) throw err;
            es.status(200).json(output)
        })


}




module.exports = {getStudentlist,Createstudent,updateStudent,deleteAllStudent,getStudentById,deleteStudentById,getStudentByName};