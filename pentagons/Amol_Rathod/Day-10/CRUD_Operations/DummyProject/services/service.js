const connection = require("../database/mysql");

/**
 * This method is used to check where the id is valid or not
 */
let total = 1;
function checkStudentIdExistOrNotExistOrNot(id) {
  let q = `select 1 from studentinformation where id = ${id}`;
  connection.con.query(q, (err, result) => {
    if (err) throw err;
    total++;
  });
}

/**
 * This method selects the single row using id from studentinformation table
 * @param {*} insertedId
 * @param {*} res
 */
const showStudentFullInformation = (insertedId, res) => {
  const showFullstudentinformationrmationQuery = `select * from studentinformation where id = ${insertedId}`;

  connection.con.query(
    showFullstudentinformationrmationQuery,
    (err, result) => {
      if (err) throw err;

      console.log(result);

      res.status(200).json(result);
    }
  );
};

// get :
/**
 * @description this method select all records from studentinformation table
 * @param {*} req
 * @param {*} res
 */
const getStudent = (req, res) => {
  let getStudentQuery = "select * from studentinformation";
  connection.con.query(getStudentQuery, (err, result) => {
    if (err) throw err;

    res.send(JSON.stringify(result));

    console.log(result);
    console.log(`get request ran successful.`);
  });
};

// getElementById :
/**
 *@description This method selects single record using id
 * @param {*} req
 * @param {*} res
 */
const getStudentById = (req, res) => {
  let id = req.params.id;
  let getStudentByIdQuery = `select * from studentinformation where id = ${id}`;
  connection.con.query(getStudentByIdQuery, (err, result) => {
    if (err) throw err;

    checkStudentIdExistOrNot(id);

    if (total == 1) {
      res.send(JSON.stringify(result));
      console.log(result);
      console.log(`getElementById request ran successful.`);
    } else {
      res.send(JSON.stringify("no record"));
      total = 0;
    }
  });
};

// post :
/**
 * @description This method inserts values of sname and sage into studentinformation table
 * @param {*} req
 * @param {*} res
 */
const createStudent = (req, res) => {
  let name = req.body.sname;
  let age = req.body.sage;
  let createStudentQuery = `insert into studentinformation (sname, sage) values ('${name}', '${age}')`;
  // / Insert query :
  connection.con.query(createStudentQuery, (err, result) => {
    if (err) throw err;

    showStudentFullInformation(result.insertId, res);
    console.log(`post request ran successful`);
  });
};

// put :
/**
 * @description this method updates row using sname in the studentinformation table
 * @param {*} req
 * @param {*} res
 */
const updateStudent = (req, res) => {
  let id = req.params.id;
  let name = req.body.sname;

  let updateStudentQuery = `update studentinformation set sname = '${name}' where id = ${id}`;
  connection.con.query(updateStudentQuery, (err, result) => {
    if (err) throw err;
    showStudentFullInformation(id, res);
    console.log(`put request ran successful`);
  });
};

// delete :
/**
 * @description This method deletes particular record using id from studentinformation
 * @param {*} req
 * @param {*} res
 */
const deleteStudent = (req, res) => {
  let id = req.params.id;

  let deleteSingleStudentQuery = `delete  from studentinformation where id = ${id}`;
  connection.con.query(deleteSingleStudentQuery, (err, result) => {
    if (err) throw err;
    let rowsAffected = result.affectedRows;
    if (rowsAffected > 0) {
      res.send(JSON.stringify(`Deleted row id : ${id}`));
    } else {
      res.send("No Record found");
    }

    console.log(`delete request ran successful`);
    console.log(`Deleted row id : ${id}`);
  });
};

// deleteAll :
/**
 * @description This method deletes all the rows from studentinformation table;
 * @param {*} req
 * @param {*} res
 */
const deleteAllStudent = (req, res) => {
  let deleteAllStudentQuery = `delete from studentinformation`;

  connection.con.query(deleteAllStudentQuery, (err, result) => {
    if (err) throw err;

    res.status(200).json(result);
    console.log(`deleteAll request ran successful`);
  });
};

// searchByName :
/**
 * @description This method searches row using sname from studentinformation table;
 * @param {*} req
 * @param {*} res
 */
const searchStudentByName = (req, res) => {
  let name = req.params.name;

  let searchStudentQuery = `select * from studentinformation where sname = '${name}'`;

  connection.con.query(searchStudentQuery, (err, result) => {
    if (err) throw err;

    res.send(JSON.stringify(result));

    console.log(`searchStudentByName request ran successful`);
  });
};

module.exports = {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  deleteAllStudent,
  getStudentById,
  searchStudentByName,
};
