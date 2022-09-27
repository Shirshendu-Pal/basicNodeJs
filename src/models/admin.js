const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
    name:{

        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    }

})
// adminSchema.methods.generateAuthToken = async function () {
//     try{

//         const token = jwt.sign({_id:this._id},"qwertyuiopoiuytrewqwertyuiopoiuytrewertyuio")
//         this.token = token;
//         await this.save();
//         return token;

//     }catch(error){

//     }
// } 

adminSchema.methods.generateAuthToken = async function () {


    try {

        const token = jwt.sign({_id: this._id}, "thisisjustasecretpinforourjwtsimpleloginwithit")
        this.token = token;
        await this.save();
        return token;


        
    } catch (error) {
        console.log(error)
    }

}




module.exports = mongoose.model("Admin", adminSchema);