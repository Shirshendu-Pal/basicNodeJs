const express = require('express')
const mongoose = require('mongoose')

require("./db/conn");
//  const Student = require("./models/students");
const {Student, Address} = require('./models')


const app = express();
const port = 3002;
// app.use(function(req, res, next) {

//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     )
//     res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS");
//     next();
//     })
app.use(express.json());

//get , post, put, delete, patch

app.post("/simple/express", async (req,res) =>{
   try{
    let first = req.body.first;
    let second = req.body.second;
    let sum = parseInt(first) + parseInt(second);
    res.status(200).send({sum})
   }catch(err){

     res.status(400).send(err)
   }
})

app.post("/addStudent", async (req, res) => {

  try{
  const name = req.body.studentName;
  const gender = req.body.studentGender;
  const subject = req.body.studentSubject;
  const company = req.body.companyName;
  const email = req.body.studentEmail;
  const student = await Student.create({
      name: name,
      gender: gender,
      subject: subject,
      company: company,
      email: email,
      
    })
    await student.save();
    res.status(200).send(student)

  }catch(err){
    // console.log("the error is ",err)
    res.status(400).send(err)
  }



})

app.post("/addAddress", async (req, res) => {
  try {
    const address = await Address.create({
      primaryAddress: req.body.primaryAddress,
      secondaryAddress: req.body.secondaryAddress,
      student: req.body.studentId
    })
    await address.save()
    res.status(200).send(address)
  }catch(err){
    req.status(400).send(err)
  }
})

app.get("/get_student", async (req, res) => {
  try{
  const findStudents = await Student.find();
  res.status(200).send(findStudents);
  }catch(err){
    res.status(400).send(err);
  }
})

app.post("/edit_student", async (req, res) => {
  try {
  const id = req.body.studentId;
  const updatedStudent = await Student.findByIdAndUpdate(id,{
    name: req.body.name,
    gender: req.body.gender,
    subject: req.body.subject,
    company: req.body.company,
    email: req.body.email,
  },{new: true})
  res.status(200).send(updatedStudent);
}catch(err){
  res.status(400).send(err);
}
})

app.post("/addressWithDetails", async (req, res) =>{
  try{
  const id = req.body.studentId;
  const stundentDetails = await Address.findOne({student:id}).populate(["student"]);
  res.status(200).send(stundentDetails);
  }catch(err){
    res.status(400).send(err);
  }
})

app.delete("/deleteStudent/:id", async (req, res) => {
  try 
  {
    const id = req.params.id;
    const student = await Student.findByIdAndDelete(id);
    if(!student) return res.status(404).send({message:"student not found"})

    const address = await Address.findOne({student: id});
    if(address){
      await address.delete();
    }
    res.status(200).send({message:"success"});
    
  } 
  catch (error) {
    res.status(400).send(err)
  }
})

app.delete("/delete_student/:id", async (req,res) => {
  try {

    const id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(id);
    if(!deleteStudent) return res.status(400).send({message: 'Student not found'});
    res.status(200).send({message: 'success'});


    
  } catch (error) {
    res.status(400).send(error)
  }
})




app.listen(port, ()=> {
    console.log(`listning to port number ${port}`)
});