const mongoose = require("mongoose");
const validator = require("validator");

const addressSchema = new mongoose.Schema({
    primaryAddress:{type:String, required:true},
    secondaryAddress:{type:String},
    student:{ 
        type:mongoose.Schema.Types.ObjectId,
            ref: "Student",
        required:true}

})

module.exports = mongoose.model("Address", addressSchema);