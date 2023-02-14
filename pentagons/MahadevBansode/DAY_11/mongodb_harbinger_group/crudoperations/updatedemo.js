const collectionObject = require('./collectiondemo');

/**
 * @description updateDoc function update accepts updateId as parameter and update the document of given ID
 * @param {*} updateId
 */
const updateDoc = async (updateId) => {
    const doc1 = await collectionObject.user.findById(updateId);
    let ouptput = doc1.update({ name: "monday" });
    console.log("update name is " + ouptput);
}

// calling updateDoc function with promises
updateDoc('63e612cd9784624c38f02d29').then(() => {
    console.log("done");
}).catch((e) => console.log("problem occured...!"));