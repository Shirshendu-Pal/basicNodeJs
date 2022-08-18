const express = require('express')
const mongoose = require('mongoose')

require("./db/conn");
const Student = require("./models/students");


const app = express();
const port = 3002;
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS");
    next();
    })
app.use(express.json());

app.post("/add-student", async (req,res) =>{
    try{
       const student = await Student.create({
            name:req.body.name,
            age:req.body.age,
        email:req.body.email,
    subject:req.body.subject})
    await Student.save();

    // res.status(200).json({'success' : true, 'result': student})
    res.status(400).send(student)
    // res.send(200, student);

    }catch(err){
        res.status(400).send("error occured", err);
    }
})




app.listen(port, ()=> {
    console.log(`listning to port number ${port}`)
});