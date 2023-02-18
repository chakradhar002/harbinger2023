var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/resturant");
var conn = mongoose.connection;
conn.on('connected' ,function()
{
    console.log('database is connected .');
});
conn.on('disconnected',function()
{
    console.log("database is disconnected .");

});
conn.on('error',console.error.bind(console,'connection error'));
module.exports = conn;
