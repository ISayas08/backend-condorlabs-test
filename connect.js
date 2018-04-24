var mongoose = require('mongoose');

mongoose.connect('mongodb://'+process.env.DB_USER+':'+process.env.DB_PWD+'@'+process.env.DB_HOST+'/'+process.env.DB_DATABASE);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

module.exports = db;