const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// steup database connection 
//'mongodb://127.0.0.1:27017/harbinger'

/**
 * @description connect method creates connection with mongodb 
 */
mongoose.connect(
    'mongodb://localhost:27017/harbingergroup', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {                               // promise
    console.log("connection successfull!");
}).catch((e) => console.log("no connection???"));

/**
 *defining what should be the attributes should be present in collection. 
 */
const userSchema = new mongoose.Schema(
    {

        name: String,
        desc : String,
        price : Number,
        color : String
    }
);

/**
 * @description model method took parameters as collection {name} and {userSchema} has attributes in 
 * collection.
 * returns db object
 * @param collectionName
 * @param userSchema
 */
const user = mongoose.model('products', userSchema);

/**
 * @description this method is just used for acknowleding that collection is created successfully.
 */
user.createCollection().then(function (collection) {  //promises
    console.log("Collection is created!");
}).catch(() => {
    console.log("Not Created Collection???");
});

module.exports = { user };