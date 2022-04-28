const mongoose = require('mongoose');

var url ='mongodb://localhost:27017/studentsData';

const connection = mongoose.createConnection(url);

module.exports = connection;