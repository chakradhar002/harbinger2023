const express = require('express')
let route = require('../Controller/productController');
let con = require('../Db/mongodb');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @description: insertProduct function is used to insert product data into the db through postman.
 */
let insertProduct = async (req, res) => {
    const obj = new con({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    })
    try {
        let data = await obj.save();
        res.json(data);
    } catch (err) {
        res.send(err)
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res
 * @description: showProduct function is used to display all the products. 
 */
let showProduct = async (req, res) => {
    try {
        let data = await con.find();
        res.json(data);
    } catch (err) {
        res.send(err);
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @description: showProductById function is used to display a product by searching an id.
 */
let showProductById = async (req, res) => {
    let id = req.params.id;
    try {
        let data = await con.findById(id);
        res.status(200).json(data);
    } catch (err) {
        res.send(err);
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @description: updateProduct function is used to update product.
 */
let updateProduct = async (req, res) => {
    let price = req.body.price;
    let id = req.params.id;
    try {
        let data = await con.updateOne({
            price
        });
        res.status(200).json(data);
    } catch (err) {
        res.send(err);
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @description: deleteProductById function is used to delete a product by specifying its Id.
 */
let deleteProductById = async (req, res) => {
    let {
        id
    } = req.params;
    try {
        console.log(id)
        let data = await con.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (err) {
        res.send(err);
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @description: deleteAllRecord function is used to delete all the record from db.
 */
const deleteAllRecord = async (req, res) => {
    try {
        const status = await con.deleteMany({})
        res.json(status)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    insertProduct,
    showProduct,
    showProductById,
    updateProduct,
    deleteProductById,
    deleteAllRecord
}