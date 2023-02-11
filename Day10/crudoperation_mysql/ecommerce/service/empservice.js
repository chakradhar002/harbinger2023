const connection = require('../db/mysqldb');
// this is business logic

//get empllist

/**
 * @description get employee list funtionality
 * @param {*} req 
 * @param {*} res 
 */
const getemployeelist = (req,res)=>{
    
    let sqlquery = "select * from customers";
    connection.query(sqlquery,(err,result)=>{
          if(err) throw err;
          res.status(200).json(result);

    });

};

param {*} res 
 */
const createemployee = ( req,res,data)=>{

    var postData = req.body;
        connection.query("INSERT INTO customers SET ?", 
        postData, function (error, results, fields) {
           if (error) throw error;
            console.log(results.insertId); // Auto increment id
            res.end(JSON.stringify(results.insertId));
    });

 
};



const cgetemployeebyid = (req,res,)=>{

    let sqlquery = "select * from customers where";
    connection.query(sqlquery,(err,result)=>{
          if(err) throw err;
          res.status(200).json(result);

    });
 
};

const updateemployeebyid = (req,res,)=>{
 
};

const deleteemployeebyid = (req,res,)=>{
 
};

module.exports = {

    getemployeelist,
    createemployee

}




