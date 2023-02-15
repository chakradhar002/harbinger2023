const router = require('../controller/studentController')
var connection = require('../database/mysqldb');


/**
 * @description:display the student details
 * @param {*} req 
 * @param {*} res 
 */
const getStudentList = (req,res) =>{
    connection.query('select * from student',(err,result)=>{
        if(err) throw err
        res.status(200).json(result);
    })
    console.log('Data feached');
};


/**
 * @description:get student by id
 * @param {*} req 
 * @param {*} res 
 */
const getStudentById = (req,res) =>{
    const id = req.body.id;
    connection.query(`select * from student where id = '${id}'`,(err,result)=>{
        if(err) throw err
        res.status(200).json(result);
    })
};

/**
 * @description:insert new student details
 * @param {*} req 
 * @param {*} res 
 */
const createStudentInfo = (req,res) =>{
    const name = req.body.name;
    const id = req.body.id;
    const address = req.body.address;
    connection.query('insert into student(id,name,address) values (?,?,?)',[id ,name , address],(err,result)=>{
        if(err) throw err
        //res.status(200).json(result);
        const resultId = result.insertId;
        displayStudentInfoById(resultId,req,res);
    })
}

/**
 * @description:showing the inserted student information
 * @param {*} resultId 
 * @param {*} req 
 * @param {*} res 
 */
 const displayStudentInfoById = (resultId,req,res) =>{
    connection.query(`select * from student where id='${resultId}'`,(err,result) =>{
        if(err) throw err
        res.status(200).json(result);
    })
 }

 /**
  * @description:update the student details
  * @param {*} req 
  * @param {*} res 
  */
const updateStudentById = (req,res) =>{
    const name = req.body.name;
    const id = req.body.id;
    connection.query(`UPDATE student SET name ='${name}' WHERE id = ${id}`,(err,result)=>{
        if(err) throw err
        res.status(200).json(result);
    });
}

/**
 * @description:search student  information by name
 * @param {*} req 
 * @param {*} res 
 */
const searchStudentByName = (req,res) =>{
    const name = req.body.name;
    connection.query(`select * from student where name = '${name}'`,(err,result)=>{
        if(err) throw err
        res.status(200).json(result);
    })
};


/**
 * @description:delete in student table by id
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudentById = (req,res) =>{
   const id = req.body.id;
    connection.query(`DELETE FROM student WHERE id ='${id}'`,(err,result)=>{
        if(err) throw err
        res.status(200).json(result);
    });
}

/**
 * @description:delete all from student table
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllStudent = (req , res) =>{
    connection.query('DELETE from student',(err,result) =>{
        if(err) throw err
        res.status(200).json(result);
    });
}


module.exports = { getStudentList ,
                getStudentById , 
                createStudentInfo ,
                updateStudentById ,
                searchStudentByName,
                deleteStudentById,
                deleteAllStudent
            };
