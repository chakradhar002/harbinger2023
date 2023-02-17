const { response } = require("express");
const { request } = require("http");
const { default: mongoose } = require("mongoose");
let route = require("../productcontroller/productcontroller");
let con = require("../productdatabase/productdatabase")


/**
 * Display all details.
 * @param {*} request 
 * @param {*} response 
 */
let getAllProductlist = async (request, response) => {
    try {
        let data = await con.find();
        response.json(data);
    }
    catch (err) {
        response.send('Error ', err);
    }
};
/**
 * This will display details according to id.
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
/**
 * description ::Update product according to id
 * @param {*} req 
 * @param {*} res 
 */
let updateProductById =(req,res) => {
    
        let id = req.params.id
        let name = request.body.name;
        let price = request.body.price;
        let category = request.body.category;
        let description = request.body.description;
        const results =  async () => {
            const ID = await con.findById(id)
            const show = await ID.updateOne({name:name,price:price,category:category,description:description})
            res.status(200).json(show)}
       }
/**
 * description ::Insert's new records .
 * @param {*} request 
 * @param {*} response 
 */
let createProductById = async (request,response) =>{
    try{
        let name = request.body.name;
        let price = request.body.price;
        let category = request.body.category;
        let description = request.body.description;
        let data = await con.create({name,price,category,description});
        response.status(200).json(data);
    }
    catch(err){
        console.log(err);
    }
};
/**
 * description ::Delete by Id .
 * @param {*} request 
 * @param {*} response 
 */
const deleteProductById = async (req,res)=>
{
    try{
        const ID = req.params.id;
        const obj = await con.findById(ID)
        const result2 = await obj.remove() 
        res.status(200).json(result2)
        }
    catch(err)
    {
        console.log(err);
    }
};
/**
 * description ::Delete all records / a collection.
 * @param {*} request 
 * @param {*} response 
 */
const deleteAllStudent =(req,res) => {
    const results2 =  mongoose.remove({})
    res.status(200).json(results2)
}
module.exports = {
    getAllProductlist,
    getProductById,
    createProductById,
     updateProductById,
     deleteProductById,
     deleteAllStudent
};