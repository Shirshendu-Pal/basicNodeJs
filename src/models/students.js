const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    subject:String,
})

const Student = new mongoose.model('Student',studentSchema);
module.exports = Student; 
