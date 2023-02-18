const { connection } = require("../db/connectdb")


/**
 * @description list all the employees
 * @param {*} req request object
 * @param {*} res response object
 */
const getEmployeeList = async (req, res) => {
  const dbStatus = await connection.connect()
  if (dbStatus == false) {
    // await connection.endConnection()
    res.status(500).send("Error connecting to DB")
  } else {
    connection.connection.query("select * from employee", async (err, result) => {
      if (err) {
        // connection.endConnection()
        res.status(500).json(err)
      } else {
        // connection.endConnection()
        res.json(result)
      }
    })
  }
}

/**
 *  @description create a employee using body 
 *  @param {*} req request object
 *  @param {*} res response object 
 */

const createEmployee = async (req, res) => {
  const dbStatus = await connection.connect()
  if (dbStatus == false) {
    res.status(500).send("Error connecting to DB")
  } else {
    connection.connection.query(
      `insert into employee(name) values ("${req.body.name}")`,
      (err, result) => {
        if (err) {
          res.status(500).json(err)
        } else {
          connection.connection.query(`select * from employee where id=${result.insertId}`, (err , results) => {
              res.json(results[0])
          })  
        }
      }
    )
  }
}

/**
 * @description update database using query params 
 * @param {*} req request object
 * @param {*} res response object
 */

const updateEmployee = async (req, res) => {
  const dbStatus = await connection.connect()
  if (dbStatus == false) {
    res.status(500).send("Error connecting to DB")
  } else {
    connection.connection.query(
      `update employee set name = "${req.body.name}" where id = ${req.params.id}`,
      (err, result) => {
        if (err) {
          res.status(500).json(err)
        } else {
        if(result.changedRows > 0){
            res.json({
                id : req.params.id, 
                name : req.body.name 
              })
        }else {
            res.status(500).json({error : "Id Not Updated"})
        }

        }
      }
    )
  }
}

/**
 * @description  delete employee using query params
 * @param {*} req request object
 * @param {*} res response object
 */
const deleteEmployee = async (req, res) => {
  const dbStatus = await connection.connect()
  if (dbStatus == false) {
    res.status(500).send("Error connecting to DB")
  } else {
    connection.connection.query(
      `delete from employee where id = ${req.params.id}`,
      (err, result , fields) => {
        console.log(fields)
        if (err) {
          res.status(500).json(err)
        } else {
            if(result.affectedRows > 0){
                res.json({
                    id:req.params.id
                })
            }else{
                res.status(500).json({error : "Id Not Found"})
            }
        }
      }
    )
  }
}


/**
 * @description delete all employees
 * @param {*} req request object
 * @param {*} res response object 
 */

const deleteAllEmployee = async (req , res ) => {
  const dbStatus = await connection.connect()
  if (dbStatus == false) {
    res.status(500).send("Error connecting to DB")
  } else {
    connection.connection.query(
      `delete from employee`,
      (err, result , fields) => {
        console.log(fields)
        if (err) {
          res.status(500).json(err)
        } else {
            if(result.affectedRows > 0){
                res.json({
                    msg : `deleted ${result.affectedRows} rows successfully`
                })
            }else{
                res.status(500).json({error : "Could not delete "})
            }
        }
      }
    )
  }
}

/**
 * @description get a employee by providing id
 * @param {*} req 
 * @param {*} res 
 */

const getEmployeeById = async( req , res) => {
  const dbStatus = await connection.connect()
  if (dbStatus == false) {
    // await connection.endConnection()
    res.status(500).send("Error connecting to DB")
  } else {
    connection.connection.query(`select * from employee where id = ${req.params.id}`, async (err, result) => {
      if (err) {
        // connection.endConnection()
        res.status(500).json(err)
      } else {
        // connection.endConnection()
        res.json(result)
      }
    })
  }
}

/**
 * @description get a employee by using name
 * @param {*} req 
 * @param {*} res 
 */

const getEmployeeByName = async (req , res) => {
  const dbStatus = await connection.connect()
  if (dbStatus == false) {
    // await connection.endConnection()
    res.status(500).send("Error connecting to DB")
  } else {
    connection.connection.query(`select * from employee where name = "${req.params.name}"`, async (err, result) => {
      if (err) {
        // connection.endConnection()
        res.status(500).json(err)
      } else {
        // connection.endConnection()
        res.json(result)
      }
    })
  }
}

module.exports = {
  getEmployeeList,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  deleteAllEmployee,
  getEmployeeById, 
  getEmployeeByName
}
