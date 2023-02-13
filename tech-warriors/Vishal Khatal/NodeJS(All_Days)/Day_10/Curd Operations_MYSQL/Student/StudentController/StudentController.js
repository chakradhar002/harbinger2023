let express = require("express");
let router = express.Router();// route refers to how applicatins' endpoint url responds to client request
let service = require("../StudentServices/StudentService")

//this router will route you to getStudentById
router.get("/getStudentById",service.getStudentById);
//this router will route you to getStudentList
router.get("/getStudentList",service.getStudentList);
//this router will route you to updateStudentById
router.put("/updateStudentById",service.updateStudentById);
//this router will route you to deleteStudentById
router.delete("/deleteStudentById",service.deleteStudentById);
//this router will route you to deleteAllStudent
router.delete("/deleteAllStudent",service.deleteAllStudent);
//this router will route you to createStudentInfo
router.post("/createStudentInfo",service.createStudentInfo);
//this router will route you to searchStudentByName
router.get("/searchStudentByName",service.searchStudentByName);
module.exports = router;// use to display or export file so that other files can access them