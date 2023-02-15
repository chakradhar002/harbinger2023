/**
 * @author:Himanshu Pise
 *
 */


const express = require('express');
var router = express.Router();
 const service = require('../service/studentservice')
//Show Whole Data from The Database
 router.get("/getliststudent",service.getStudentList);

//Create Entries into the Data
 router.post("/createstudentdata",service.createstudentList);

 //Update data into the Database
 router.put("/updatestudentdata/:id", service.updatestudentdata);

 //Delete Whole Data From Database
 router.delete("/deletestudentdata", service.deleteallstudentdata);

 //Delete Selected data from the database by given id
 router.delete("/deletestudentbyid/:id",service.deletestudentdatabyid);

 //Show specific data from the search
 router.get("/getstudentbyid/:id",service.getstudentbyid);

 //show Data According to given name
 router.get("/getstudentbyname",service.getstudentbyname)

module.exports = router;