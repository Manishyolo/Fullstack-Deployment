const mongoose = require("mongoose");


function ConnectToDb(){

    mongoose.connect("mongodb+srv://manish:HnkkOSsDnK5u7j1g@cluster0.7xhlxtx.mongodb.net/data-2").then(()=>{
        console.log("connected to db");
        
    }).catch((err)=>{
        console.log(err);
        
    })
}

module.exports = ConnectToDb;