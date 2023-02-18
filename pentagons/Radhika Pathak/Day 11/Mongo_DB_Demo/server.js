var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myharbinger');

//connection
var con = mongoose.connection;
con.on('connected', function () {
    console.log("Database connected Successfully");
});
con.on('disconnected', function () {
    console.log("Database disconnected Successfully");
})
con.on('error', console.error.bind(console, "Çonnection Error"));
module.exports = con;
