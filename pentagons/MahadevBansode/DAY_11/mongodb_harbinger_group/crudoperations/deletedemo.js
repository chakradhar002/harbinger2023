const collectionObject = require('./collectiondemo');

/**
 * @description deleteDoc function accepts argument as deleteID and delete this document from collection
 * @param {*} deleteId 
 */
const deleteDoc = async (deleteId) => {
    const doc1 = await collectionObject.user.findByIdAndDelete('63e612cd9784624c38f02d29');
    console.log("deleted name is " + doc1);
}

// calling deleteDoc function using promises
deleteDoc().then(() => {
    console.log("done");
}).catch((e) => console.log("problem occured...!"));