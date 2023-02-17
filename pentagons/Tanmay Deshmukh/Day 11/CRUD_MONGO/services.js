
const router = require('../CRUD_MONGO/controller')
var mongoose = require('../CRUD_MONGO/db')


function GetDetails(req,res){
    let id = req.params.id
    con.query(`SELECT * FROM harbinger.student where id = '${id}'`,(err, result)=> {
            if (err) throw err;
            return res.status(200).json(result)
        })
}

/**
 * @description getStudentlist gets the List of all Student
 * @param {*} req 
 * @param {*} res 
 */
const getStudentlist =(req,res) => {

    const results =  async () => {
     const result2 = await mongoose.find({})
     res.status(200).json(result2)}
    
     results()
    
}

/**
 * @description getStudentByName fuction gets student detais by Students name
 * @param {*} req 
 * @param {*} res 
 */
const getStudentByName =(req,res) => {
    let Stuname = req.params.name
    const results =  async () => {
        const result2 = await mongoose.find({name:Stuname})
        res.status(200).json(result2)}
       
        results()
   }



/**
 * @description Createstudent is Used to create a New Student
 * @param {*} req 
 * @param {*} res 
 */
const Createstudent = (req,res) => {
    var Stuname = req.body.name
    var stuAge = req.body.age
    const results =  async () => {
        const result2 = await mongoose.create({name:Stuname,age:stuAge})
        res.status(200).json(result2)}
       
        results()
   }
    
            

/**
 * @description updateStudent is used to update the details of student with student id 
 * @param {*} req 
 * @param {*} res 
 */        
const updateStudent =(req,res) => {
    
    let Stuid = req.params.id
    let Stuname = req.body.name
    let Stuage = req.body.age

    const results =  async () => {
        const obj = await mongoose.findById(Stuid)
        const results2 = await obj.updateOne({name:Stuname,age:Stuage})
        res.status(200).json(results2)}
       
        results()
   }




/**
 * @description deleteAllStudent This function is used to delete all the students 
 * @param {*} req 
 * @param {*} res 
 */
const deleteAllStudent =(req,res) => {
        const results =  async () => {
        const results2 = await mongoose.remove({})
        res.status(200).json(results2)}
       
        results()


}


/**
 * @description getStudentById This function gets Student details by id
 * @param {*} req 
 * @param {*} res 
 */
const getStudentById =(req,res) => {
    let Stuid = req.params.id
    const results =  async () => {
        const obj = await mongoose.findById(Stuid)
        res.status(200).json(obj)}
       
        results()
}



/**
 * @description deleteStudentById This function deletes Student  by id
 * @param {*} req 
 * @param {*} res 
 */

const deleteStudentById =(req,res) => {
    const stuId = req.params.id
    const results =  async () => {
        const obj = await mongoose.findById(stuId)
        const result2 = await obj.remove() 
        res.status(200).json(result2)}
       
        results()


}




module.exports = {getStudentlist,Createstudent,updateStudent,deleteAllStudent,getStudentById,deleteStudentById,getStudentByName};