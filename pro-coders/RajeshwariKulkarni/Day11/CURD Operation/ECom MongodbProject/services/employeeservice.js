const express = require('express')
const empSchema = require('../model/employeeschema')
const employee = require('../services/employee')

const getAllEmployees =  (req,res)=>{
     let result = getEmployees();
    if(result == null){
        console.log("there is an error!!");
    }
    else{
        res.status(200).json(result);
    }
}

// const getEmployeeById = (req,res)=>{
//     let result = getEmployeebyId();
//     if(result == null){
//         console.log('there is an error');
//     }
//     else{
//         res.status(200).json(result);
//     }
// }


module.exports = {
    getAllEmployees
}