const router =  require('../controller/studentcontroller')
var connection  = require('../db/dbconnection');

//
/**
 * @author Himanshu Pise
 * @description  Show whole data from the DataBase
 * @param {*} req
 * @param {*} res
 */
const getStudentList = (req, res) => {

       connection.query('SELECT * FROM student.data',(err, result)=> {
        if (err) throw err;
        res.status(200).json(result);
    });

  };

  /**
 * @description  Create (Insert) Data into the Database
 * @param {*} req
 * @param {*} res
 */
const createstudentList =(req,res) => {
        var rollno=req.body.rollno;
        var name=req.body.name;
        var address=req.body.address;
        // let q1="INSERT INTO student.stud_data (name, address) VALUES ('Himanshu','Wardha')";
        // let q1='INSERT INTO student.stud_data VALUES(' + '"' +String(name) + '"' +'"' + String(postion)+'"'+'';
        let q1=`INSERT INTO student.data values('${rollno}','${name}','${address}');`

      connection.query(q1,(err, result)=> {
        if (err) throw err;
        // res.status(200).json(result);

        connection.query('SELECT * FROM student.data',(err, result)=> {
          if (err) throw err;
          res.status(200).json(result);
      });

    });

};

/**
 * @description  Update Data aBy the given id from
 * @param {*} req
 * @param {*} res
 */

 const updatestudentdata =(req,res) => {

        var rollno=req.params.id; //param passed by url
        var name=req.body.name;
        var address=req.body.address;

        let q1=`UPDATE student.data SET name='${name}',address='${address}' WHERE rollno='${rollno}';`
        // 'UPDATE users SET name = $1, email = $2 WHERE id = $3'
      connection.query(q1,(err, result)=> {
        if (err) throw err;
        // res.status(200).json(result);
        connection.query(`SELECT * FROM student.data WHERE rollno='${rollno}';`,(err, result)=> {
          if (err) throw err;
          res.status(200).json(result);

      });
  });
};


/**
 * @description  Delete Data from given id
 * @param {*} req
 * @param {*} res
 */
const deletestudentdatabyid =(req,res)=>{

      var rollno=req.params.id;
      let q1=`SELECT * FROM student.data WHERE rollno=${rollno};`
      connection.query(q1,(err,result) => { 
        if (err) throw err;
        res.status(200).json(result); })

      let q2=`Delete FROM student.data WHERE rollno='${rollno}';`
    connection.query(q2,(err, result)=> { 
      if (err) throw err;
      res.status(200).json(result);
    });
}

//
/**
 * @description  Search Data by the given id
 * @param {*} req
 * @param {*} res
 */
const getstudentbyid =(req,res)=>{
      let rollno = req.params.id;
      console.log(rollno);
      let q1=`SELECT * From student.data WHERE rollno = '${rollno}';`
      connection.query(q1,(err,result)=>{
        if (err) throw err;
          res.status(200).json(result);
      });
}

//
/**
 * @description  Search Data by the given name
 * @param {*} req
 * @param {*} res
 */
const getstudentbyname =(req,res)=>{
  let name = req.params.name;
  console.log(rollno);
  let q1=`SELECT * From student.data WHERE rollno = '${rollno}';`
  connection.query(q1,(err,result)=>{
    if (err) throw err;
      res.status(200).json(result);
  });
}

/**
 * @description  Delete All Data From The Data
 * @param {*} req
 * @param {*} res
 */
const deleteallstudentdata =(res,req)=>{
  connection.query('Delete FROM student.data;',(err, result)=> { 
    if (err) throw err;
    res.status(200).json(result);

});
}



 module.exports = {getStudentList,
                    createstudentList,
                    updatestudentdata,
                    deleteallstudentdata,
                    deletestudentdatabyid,
                    getstudentbyid,
                    getstudentbyname};
