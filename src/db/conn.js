const mongoose = require("mongoose");

const mongoDb = "mongodb://localhost:27017/pcs_mern_traing";
mongoose.connect(mongoDb,{

     useCreateIndex:true, // for properly connection,no  DeprecationWarning warning  on database
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useFindAndModify : false
}).then(()=>{
    console.log("connection successful")
}).catch(() =>{
    console.log("connection failed")
})
