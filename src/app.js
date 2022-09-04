const express = require('express')
const mongoose = require('mongoose')

require("./db/conn");
// const Student = require("./models/students");
// const {Student} = require('./models')


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




app.listen(port, ()=> {
    console.log(`listning to port number ${port}`)
});