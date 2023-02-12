/**
 * @author Aditya Mahajan
 */

const database = require('../database/databaseConnection')
const controller = require('../controller/customerController')

/**
 * @description - function for displaying all records from mongoDB
 * @param {*} req 
 * @param {*} res 
 */
const displayData = async (req, res) => {
    try {
        const data = await database.find()
        res.json(data)
    }
    catch (err) {
        res.send(err)
    }
};

/**
 * @description - function for displaying specfic records from mongoDB
 * @param {*} req 
 * @param {*} res 
 */
const displayDataById = async (req, res) => {
    try {
        let data = await database.findById(req.params.id)
        res.json(data)
    } catch (err) {
        res.send(err)
    }
}

/**
 * @description - Inserts a new record in mongoDB 
 * @param {*} req 
 * @param {*} res 
 */
const insertData = async (req, res) => {
    const insertRecord = new database({
        name: req.body.name,
        age: req.body.age
    })
    try {
        let data = await insertRecord.save();
        res.json(data)
    } catch (err) {
        res.send(err)
    }
}

/**
 * @description - fucntion for update any record in database
 * @param {*} req 
 * @param {*} res 
 */
const updateData = async (req, res) => {
    try {
        record = {
            name: req.body.name,
            age: req.body.age
        }
        const data = await database.findByIdAndUpdate(req.params.id, record)
        res.json(data)
    } catch (err) {
        res.send(err)
    }
}

/**
 * @description - delete specfic record from database
 * @param {*} req 
 * @param {*} res 
 */
const deleteRecord = async (req, res) => {
    try {
        const status = await database.findByIdAndDelete(req.params.id)
        res.json(status)
    } catch (err) {
        res.send(err)
    }
}

/**
 * @description - delete all records from database 
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllRecord = async (req, res) => {
    try {
        const status = await database.deleteMany({})
        res.json(status)
    } catch (err) {
        res.send(err)
    }
}

module.exports = { displayData, displayDataById, insertData, updateData, deleteRecord, deleteAllRecord }