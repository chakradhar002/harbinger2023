const router =  require('../controller/empcotroller')
var connection  = require('../db/mysqlconnection');

/**
 * @description get employee List 
 * @param {*} req 
 * @param {*} res 
 */
const getEmployeeList = (req, res) => {
   
       connection.query('SELECT * FROM customers',(err, result)=> {
        if (err) throw err;
        res.status(200).json(result);
    }); 
  };

  /**
   * @description Create Employee Info  
   * @param {*} req 
   * @param {*} res 
   */
  const createEmployeeInfo = (req, res) => {
    const name=req.body.name;
    const address=req.body.address;
    connection.query("INSERT INTO customers (name, address) VALUES (?,?)",[name,address],(err, result)=> {
     if (err) throw err;
     else {
      console.log("inserted successfully");
      console.log(result.insertId);
      const id=result.insertId
      getEmployeeDetailsById(req,res,id);
     };
 });
};
 
/**
 * @description get Employee Details By Id
 * @param {*} req 
 * @param {*} res 
 * @param {*} id 
 */
const getEmployeeDetailsById=(req, res,id)=>{
  connection.query("select * from customers where customerid= ?",[id],(err, result)=> {
   if (err) throw err;
   else {
    console.log("Employee list is getting");
    res.status(200).json(result);
  };
});
}
/**
 * @description  update adress in Employee list by id
 * @param {*} req 
 * @param {*} res 
 */
const updateEmployeeList=(req,res)=>{
    const address=req.body.address;
    const customerID=req.body.customerID;

  connection.query(`UPDATE customers SET address = ? WHERE customerid=?`,[address,customerID],(err,result)=>{
    if(err) throw err;
    else {
      console.log("Updated successfully");
      res.send("updated successfully");
    };
    
  })
}

/**
 * Delete Employee list by ID
 * @param {*} req 
 * @param {*} res 
 */
const deleteEmployeeList=(req,res)=>{
  const customerID=req.body.customerID;
  
connection.query("DELETE FROM customers WHERE customerid = ?",[customerID],(err,result)=>{
  if(err) throw err;
  else {
    if(result!=""){
    console.log("Deleted successfully");
    console.log(result.insertId);
    res.send("Deleted successfully");
    }
    else{
      res.send(" Id not found");
    }
  };
})
}

/**
 * @description delete All Employee List
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllEmployeeList=(req,res)=>{
connection.query("DELETE FROM customers",(err,result)=>{
  if(err) throw err;
  else {
    console.log("Deleted All records successfully");
    res.send("Deleted All records successfully");
  };
 
})
}

//search
/**
 * @description Search Employee Details By Name
 * @param {*} req 
 * @param {*} res 
 */
const searchEmployeeDetailsByName = (req, res) => {
  var name=req.body.name;
  connection.query("select * from customers where name= ?",[name],(err, result)=> {
   if (err) throw err;
   else {
    if(result!=""){
      console.log("Employee list is getting");
    res.status(200).json(result);
    }
    else{
      res.send("data is not found");
    }
  };
});
};

//exporting function
 module.exports =  {
                      getEmployeeList,
                      updateEmployeeList,
                      createEmployeeInfo,
                      deleteEmployeeList,
                      getEmployeeDetailsById,
                      deleteAllEmployeeList,
                      searchEmployeeDetailsByName
                  };