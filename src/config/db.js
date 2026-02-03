const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function ConnectToDb(){

    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to db");
        
    }).catch((err)=>{
        console.log(err);
        
    })
}

module.exports = ConnectToDb;