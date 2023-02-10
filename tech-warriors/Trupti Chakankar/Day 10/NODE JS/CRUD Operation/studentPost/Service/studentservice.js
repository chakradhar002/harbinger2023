let connection = require('../DB/StdDb').con;
const controller = require('../Controller/StdController')

let getquery = 'select * from student';

/**
 * show all record from student table - with get
 * @param {*} req 
 * @param {*} res 
 */
const getstudentlist = (req, res)=>{
    connection.query(getquery, (err, data)=>{
        if(err) throw err;
        console.log('select query');
        res.status(200).json(data);
    })
};

/**
 * @description:insert record in student table - with POST
 * @param {*} req 
 * @param {*} res 
 */
const insertStudentList = (req, res)=>{
    let sname = req.body.sname;
    let address =  req.body.address;
    let insertquery = `insert into student (sname,address) values ("${sname}","${address}")`;
    connection.query(insertquery,(err,data) =>{
        if(err) throw err;
        else{
            console.log("Inserted!!")
            showingInsertedRecord(data.insertId,req,res);
        }
    })
}

/**
 * @description:showing inserted recored in postman responce block
 * @param {*} insertId 
 * @param {*} req 
 * @param {*} res 
 */
const showingInsertedRecord = (insertId,req,res) =>{
    let searchquery = `select * from student where sid='${insertId}'`;
    connection.query(searchquery,(err,data)=>{
        if(err) throw err;
        else{
        res.status(200).json(data);
        }
    })
}

/**
 * @description:updates record from student id - with PUT
 * @param {*} req 
 * @param {*} res 
 */

const updateStudent = (req,res)=>{
    let sname = req.body.sname;
    let sid = req.body.sid;
    let updatequery = `update student set sname='${sname}' where sid=${sid}`
    connection.query(updatequery,(err,data) =>{
        if(err) throw err;
        else{
            console.log("Updated!!")
            res.status(200).json(data);
        }
    })
}

/**
 * @description:delete single element from student table - with DELETE
 * @param {*} req 
 * @param {*} res 
 */

const deleteStudent = (req,res)=>{
    let sid = req.body.sid;
    connection.query('delete from student where sid=?',[sid],(err,data) =>{
        if(err) throw err;
        else{
            console.log("Deleted!!")
            res.send('Deleted data');
        }
    })
}


/**
 * @description :show single record by student id - with getBYId
 * @param {*} req 
 * @param {*} res 
 */

const getById = (req,res)=>{
    let sid = req.params.sid;
    let getbyidquery = `select * from student where sid = ${sid}`
    connection.query(getbyidquery,(err,data) =>{
        if(err) throw err;

        else{
            console.log("get By id!!")
            res.status(200).json(data);
        }
    })
}

/**
 * @description : showing record which search by id - search by name
 * @param {*} req 
 * @param {*} res 
 */
const searchByName = (req,res)=>{
    let sname =  req.params.sname;
    let searchbynamequery = `select * from student where sname ="${sname}"`;
    connection.query(searchbynamequery,(err,data)=>{
        if(err) throw err;
        else{
            console.log("Seached By Name Successfully!!")
            res.status(200).json(data)
        }
    })
}
/**
 * @description : delete all record from table
 * @param {*} req 
 * @param {*} res 
 */
const deleteallStudent =(req,res)=>{
    let deletequery = 'delete from student'
    connection.query(deletequery,(err,data)=>{
        if(err) throw err;
        else{
            console.log("Deleted All!!");
            res.status(200).json(data);
        }
    })
}




module.exports = {getstudentlist, insertStudentList ,updateStudent ,deleteStudent,getById, searchByName, deleteallStudent};
