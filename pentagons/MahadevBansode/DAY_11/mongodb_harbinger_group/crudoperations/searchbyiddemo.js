const collectionObject = require('./collectiondemo');

/**
 * @description searchById function accepts searchId as parameter and prints the document of given ID
 * @param {*} searchId
 */
const searchById = async (searchId) => {

    let doc = await collectionObject.user.findById(searchId);
    console.log(doc);
}

searchById('63e612cd9784624c38f02d29').then(() => {
    console.log("sucesss....!");
}).catch((e) => console.log("problem occurred..!"));