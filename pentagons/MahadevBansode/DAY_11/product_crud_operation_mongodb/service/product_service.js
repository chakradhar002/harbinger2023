let userObj = require('../database/mongodatabase');

/**
 * @description createProduct function add documents into the collection.
 * @param {*} req 
 * @param {*} res 
 */
let createProduct = (req, res) => {

    let name = req.body.name;
    let des = req.body.desc;
    let pr = req.body.price;
    let clr = req.body.color;

    let userSchemeListOne = new userObj.user({
        name: name,
        desc:  des,
        price: pr,
        color: clr
    });

    userSchemeListOne.save((err, data) => {
        res.send(JSON.stringify(data));
        //console.log('Inserted into product');
    });
}
/**
 * @description 
 * @param {*} req 
 * @param {*} res 
 */
let getProductByName = async (req, res) => {

    let name = req.params.name;
    let doc = await userObj.user.findById(id);
    res.status(200).json(doc);

}

let getProductById = async (req, res) => {

    let id = req.params.id;
    let doc = await userObj.user.findById(id);
    res.status(200).json(doc);

}

/**
 * @description 
 * @param {*} req 
 * @param {*} res 
 */
let updateProductById = async (req, res) => {

    let id = req.params.id;
    let name = req.body.name;
    let des = req.body.desc;
    let pr = req.body.price;
    let clr = req.body.color;

    let doc = await userObj.user.findById('');
    let updatedDoc = doc.update({
        name: name,
        desc:  des,
        price: pr,
        color: clr
    });
    console.log("update name is " + ouptput);
    res.status(200).json();
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
let deleteProductById = async (req, res) => {

    let id = req.params.id;
    let doc = await userObj.user.findByIdAndDelete(id);
    console.log("Deleted Product is " + doc);
    res.status(200).json();
}

module.exports = {
    createProduct,
    getProductById,
    getProductByName,
    updateProductById,
    deleteProductById
}