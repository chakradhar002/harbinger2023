const { response } = require("express");
const { request } = require("http");
let route = require("../StudentController/StudentController");
let con = require("../StudentDataBase/StudentMySQLDataBase");
let getStudentD = (request, response) => { //service name:
    con.query("select * from customers",(err , result)=> {
        if (err) throw err;
        response.status(200).json(result);
    });
};
module.exports = {getStudentD};