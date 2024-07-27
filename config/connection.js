//Establish connection to mongoose
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/MongoSocial');

var conn = mongoose.connection;

conn.on('connected', function(){
    console.log('MongoSocial is connected successfully');
});

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;