const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({
    title:String,
    description:String
})

const noteModel = mongoose.model("notes-2",noteSchema);

module.exports = noteModel;