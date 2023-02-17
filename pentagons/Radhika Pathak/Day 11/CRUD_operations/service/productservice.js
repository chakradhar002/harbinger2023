const { privateDecrypt } = require('crypto');
const { response } = require('express');
const router = require('../controller/productcontroller');
const product = require('../db/connection');
var connection = require('../db/connection');
/**
 * @author Radhika Pathak
 */
/**
 * @description get all product list
 * @param {*} req 
 * @param {*} res 
 */
        const getDetails = async (req,res)=>{ 
                const ans = await product.find({});
                res.status(200).json(ans);
}

/**
 * @description create new product 
 * @param {*} req 
 * @param {*} res 
 */
const insertProduct = (req,res)=>{
    let name = req.body.name;
    let price = req.body.price;
    let brand = req.body.brand;
    let ram = req.body.ram;
    let data = {name,price,brand,ram};
    //to store into database
    product.create(data,(err,result)=>{
        res.send(result);
    })
}

/**
 * @description update product details with given details
 * @param {*} req 
 * @param {*} res 
 */


/**
 * @description display records of products with given id
 * @param {*} req 
 * @param {*} res 
 */

/**
 * @description delete record of particular product with given id
 * @param {*} req 
 * @param {*} res 
 */

/**
 * @description delete all product details
 * @param {*} req 
 * @param {*} res 
 */

/**
 * @description search a product by specific name
 * @param {*} req 
 * @param {*} res 
 */
const getProductByName = (req,res)=>{
    let search_name = req.params.name;
    try
    {
        const results = async()=>{
            const ans = await product.find({name:search_name});
            res.status(200).json(ans);
        }
        results();
    }
    catch(err){
        response.send("Error:",err);
    }
}

module.exports = {getDetails,
    insertProduct,
    getProductByName
};