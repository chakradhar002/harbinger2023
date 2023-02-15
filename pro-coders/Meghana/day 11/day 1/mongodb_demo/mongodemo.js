var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myHarbingergroup');

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('Database is connected successfully');
});
conn.on('Disconnected', function() {
    console.log('Database is disconnected successfully');
});

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;
