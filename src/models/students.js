const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
   
    email:{type:String,
            required:true,
        unique:true},

    age:{
        type:String,
        required:true,
    },

    subject:{
        type:String,
    required: true,},
    marks:{
        type:String,
        required: true,
    }
})

module.exports = mongoose.model("Student", studentSchema);
