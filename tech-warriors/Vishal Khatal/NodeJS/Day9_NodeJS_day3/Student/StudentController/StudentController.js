let express = require("express");
let router = express.Router();// route refers to how applicatins' endpoint url responds to client request
let service = require("../StudentServices/StudentService")
router.get("/getStudentDetails",service.getStudentD);// get request("limited data because it is sent in header and post is sent in body")
module.exports = router;// use to display or export file so that other files can access them