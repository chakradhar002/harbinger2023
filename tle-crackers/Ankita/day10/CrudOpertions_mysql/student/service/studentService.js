const router = require('../controller/studentController')
var con = require('../db/dbconn');
const { json } = require('body-parser');

const getallstudents = (req, res) => {

    con.connection.query('select * from persons1', (err, result) => {
        if (err) throw err;
        console.log('get request')
        res.status(200).json(result);

    });
}
const getStudentById = (req,res) =>{
    let pid=req.params.id;
 let query=`select * from persons1 where id=${pid}`;
 con.connection.query(query,(err,result)=>{
    if(err) throw err;
    res.status(200).json(result);
 })
}

const addStudent = (req,res)=>{
    let LastName=req.body.LastName;
    let FirstName=req.body.FirstName;
    let Age=req.body.Age;
    let query=`insert into persons1 (LastName,FirstName,Age) values('${LastName}','${FirstName}',${Age})`
    con.connection.query(query,(err,result)=>{
        if(err) throw err;
        res.send(200).json(result);
    })
}
const updateById =(req,res)=>{
    let LastName=req.body.LastName;
    let pid=req.params.id;
   let query=`update persons1 set LastName ='${LastName}' where id = ${pid}`;
    con.connection.query(query,(err,result)=>{
        if(err) throw err;
        res.send(200).json(result);
    })
}

const searchByName =(req,res)=>{
    let lname=req.body.LastName;
    let query=`select * from persons1 where LastName='${lname}'`;
    con.connection.query(query,(err,result)=>{
        if(err) throw err;
        res.send(200).json(result);
    })

}
const deleteById=(req,res)=>{
   
    let pid=req.params.id;
   let query=`delete from persons1  where id = ${pid}`;
    con.connection.query(query,(err,result)=>{
        if(err) throw err;
        res.send(200).json(result);
    })
}
const deleteAllStudent=(req,res)=>{
    let query=`delete from persons1`;
    con.connection.query(query,(err,result)=>{
        if(err) throw err;
        res.send(200).json(result);
    })
}


module.exports = {
     getallstudents,
     getStudentById,
     addStudent,
     updateById,
     searchByName,
     deleteById,
     deleteAllStudent
};