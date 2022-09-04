const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    email:{type:String,
            required:true,
        unique:true},

    subject:{type:String,
    required: true,}
})

module.exports = mongoose.model("Student", studentSchema);
