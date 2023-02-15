const { response } = require("express");
const { request } = require("http");
let route = require("../product_using_Mongodb/productcontroller");
let con = require("../product_using_Mongodb/productdatabase")

/**
 * Display all details of Product Collections
 * @param {*} request 
 * @param {*} response 
 */
let getAllProductlist = async (request, response) => {
    try {
        let data1 = await con.find();
        response.json(data);
    }
    catch (err) {
        response.send('Error ', err);
    }
};

/**
 * Get products details according to _id=object_id.
 * @param {*} request 
 * @param {*} response 
 */
let getProductById = async (request, response) => {
    let objId = request.params.id;

    try {
        let data = await con.findById(objId);
        response.json(data);
    }
    catch (err) {
        response.send("Error:", err)
    }
};
let updateProductById = async (request, response) => {
    
    try {
        let {name, age } = request.body
        let data = await con.findByIdAndUpdate(request.params.id, name,age);
        response.json(data);
    }
    catch (err) {
        response.send("Error:", err);
    }
}
let createProductById = async (request,response) =>{
    try{
        let name = request.body.name;
        let age = request.body.age;
        let data = await con.create(name,age);
        response.json(data);
    }
    catch(err){
        response.send("Error:", err)
    }
};
let insertInProduct = async (request,response) =>
{
    try{
       //let {name, price,color ,description,category} = request.body;
        const insert = await con.insertOne(request.body.name,request.body.price,request.body.description,request.body.category);
        response.status(200).send(insert);
    }
    catch(err){
        response.send("Error:", err);
    }
}
module.exports = {
    getAllProductlist,
    getProductById,createProductById,updateProductById,insertInProduct
};