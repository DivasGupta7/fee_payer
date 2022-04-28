const mongoose = require('mongoose');
const db = require('../config/db');

const studentSchema = new mongoose.Schema({
    st_id:{
      type:Number,
    },
    Name:{
        type:String,
        default:"----"
    },
    class:{
        type:Number,
    },
    roll_no:{
        type:Number,
    },
    ph_no:{
        type:Number,
    }
});

const studentmodel = db.model('students',studentSchema);

module.exports = studentmodel;