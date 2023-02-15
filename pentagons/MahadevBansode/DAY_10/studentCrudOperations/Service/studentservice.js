let connect = require("../Database/mysqldb");

/**
 * 
 * @author  Mahadev Bansode
 * 
 */

/**
 * @description display student details Using GET Method
 * @param {*} req 
 * @param {*} res 
 */
const getStudentList = (req, res) => {
  connect.query("select * from student", function (err, result) {
    if (err) throw err;
    res.status(200).json(result);
    //console.log(result);
  });
};


/**
 * @description Search Details of Student By ID Using PUT Method
 * @param {*} req 
 * @param {*} res 
 */
const getStudentById = (req, res) => {
  let id = req.params.id;

  connect.query(`select * from student where id='${id}'`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};


/**
 * @description Insert Student Details Using POST Method
 * @param {*} req 
 * @param {*} res 
 */
const createStudent = (req, res) => {
  let name = req.body.name;
  let city = req.body.city;

  console.log(name);
  console.log(city);

  connect.query(
    `insert into student(name,city) values('${name}','${city}')`,
    function (err, result) {
      if (err) throw err;
      searchForResult(result.insertId, req, res);
    }
  );
};

/**
 * @description Update Student Details By ID using PUT Method
 * @param {*} req 
 * @param {*} res 
 */
const updateStudentById = (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let city = req.body.city;

  connect.query(
    `update student set name='${name}',city='${city}' where id='${id}'`,
    id,
    (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    }
  );
};

/**
 * @description DELETE Student Details by ID by Using DELETE Method
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudentById = (req, res) => {
  let id = req.params.id;
  console.log("delete id = ", id);

  connect.query(`delete from student where id='${id}'`, id, (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0)
      res.send(JSON.stringify("Succesfully Record Deleted : id = " + id));
    else res.send(JSON.stringify("Recored not Found Having id = " + id));
  });
};

/**
 * @description Delete all Student Records From student table Using DELETE Method
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllStudents = (req, res) => {
  connect.query(`delete from student`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};

/**
 * @description Search Details of Student By ID Using PUT Method
 * @param {*} req 
 * @param {*} res 
 */
const getStudentByName = (req, res) => {
  let name = req.params.name;

  connect.query(`select * from student where name='${name}'`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};


/**
 * @description used to return inserted data into the user for Acknowledgement
 * @param {*} insertedId 
 * @param {*} req 
 * @param {*} res 
 */
let searchForResult = (insertedId, req, res) => {
  connect.query(
    `select * from student where id='${insertedId}'`,
    (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    }
  );
};

module.exports = {
                    getStudentById,
                    getStudentList,
                    createStudent,
                    updateStudentById,
                    deleteStudentById,
                    deleteAllStudents,
                    getStudentByName
                };
