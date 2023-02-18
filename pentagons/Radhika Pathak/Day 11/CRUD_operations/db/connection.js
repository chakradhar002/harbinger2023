var mongoose = require('mongoose');
mongoose.set('strictQuery',false);

var url = ('mongodb://localhost:27017/ecommerce');

//connection
var url = 'mongodb://localhost:27017/ecommerce';
//set up database connection
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>console.log("No Connection"));

const productSchema = new mongoose.Schema(
    {   name: String,
        price: Number,
        brand: String,
        RAM: String 
    }
)
const product = mongoose.model('product',productSchema);
//creating a collection
product.createCollection().then(function(collection){
    console.log("Collection is created");
}).catch((e)=>console.log("No connection created"));

module.exports = product;