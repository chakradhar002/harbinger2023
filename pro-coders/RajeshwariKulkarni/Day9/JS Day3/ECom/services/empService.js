const conn = require('../db/mysqDb');

const getemployeelist = (req,res)=>{
    let sqlquery = "select * from employee";
    conn.query(sqlquery,(err,results)=>{
        if(err) throw err;
        res.status(200).json(results);
    })
}