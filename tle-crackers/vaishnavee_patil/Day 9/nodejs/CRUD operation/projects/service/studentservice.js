const router=require("../Controller/studentcontroller");
var connection  = require('../db/mysqldb');
/**
 * 
 * @author vaishnavee
 */


/**
 * @description create students information
 * @param {*} req 
 * @param {*} res 
 */
const createStudentlist=(req,res)=>{
  const sname=req.body.sname;
  const mark=req.body.mark;
    connection.query('INSERT INTO persons(sname,mark) VALUES(?,?)',[sname,mark],(err,result)=>{
      if(err){ 
         throw err;
      }
      else{
      //res.send("task completed");
      const id=result.insertId;
      getStudentById(req,res,id);
      };
    });
};
/**
 * @description deleting all records in mentioned table
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudentAll=(req,res)=>{
  const id=req.body.id;
  connection.query('DELETE from persons ',(err,result)=>{
    if(err) {
      throw err;
    }
    else{
   // res.status(200).json(result);
    res.send("task completed");
    }
  });
};
/**
 * @description displaying information of student by name of student
 * @param {*} req 
 * @param {*} res 
 */
const getStudentByname=(req,res)=>{
  const sname=req.body.sname;
  connection.query('SELECT *FROM persons WHERE sname=?',[sname],(err,result)=>{
    if(err) {
      throw err;
    }
    else{
    res.status(200).json(result);
   // res.send("task completed");
    }
  });
};
/**
 * @description displaying students information by id
 * @param {*} req 
 * @param {*} res 
 */
const getStudentById=(req,res,id)=>{
  //const id = req.params.id;
  //const id = req.body.id;
  connection.query('SELECT * FROM persons WHERE id=?',id,(err, result)=>{
    if(err) {
      throw err;
    }
    else{
        res.status(200).json(result);
         }
  });
};
/**
 * @description update students information with the help of id
 * @param {*} req 
 * @param {*} res 
 */
const updateStudentlist=(req,res)=>{
  const id=req.body.id;
  const sname=req.body.sname;
  connection.query('UPDATE persons SET sname=? WHERE id=?',sname,id,(err,result)=>{
    if(err){
      throw err;
    }
    else{
   // res.status(200).json(result);
    res.send("task completed");
    }
  });
};
/**
 * @description deleting students record with the help of id
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudentlist=(req,res)=>{
  const id=req.body.id;
  connection.query('DELETE from persons WHERE id=?',[id],(err,result)=>{
    if(err) {
      throw err;
    }
    else{
   // res.status(200).json(result);
    res.send("task completed");
    }
  });
};
/**
 * @description inserting record into table
 * @param {*} req 
 * @param {*} res 
 */
const putStudentlist=(req,res)=>{
  const sname=req.body.sname;
  const mark=req.body.mark;
  connection.query('INSERT INTO persons(sname,mark) VALUES(?,?)',[sname,mark],(err,result)=>{
      if(err) throw err;
      res.status(200).json(result);
  });
};
/**
 * @description displaying information in a table
 * @param {*} req 
 * @param {*} res 
 */
const getStudentlist=(req, res) => {
    connection.query('SELECT * FROM persons',(err, result)=> {
        if (err) throw err;
        res.status(200).json(result);
    });
};

module.exports={
                  createStudentlist,
                  deleteStudentAll,
                  getStudentByname,
                  getStudentById,
                  updateStudentlist,
                  deleteStudentlist,
                  putStudentlist,
                  getStudentlist
                };