/**
 * @author: Anushree Gore
 * @description: Database connection
 */

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successfull!');
}).catch((e) => console.log('Connection failed!'));

const mySchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String
})

module.exports = mongoose.model('product', mySchema)