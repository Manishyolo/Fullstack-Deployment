const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path")
const noteModel = require("../models/NoteModel");

app.use(cors());
app.use(express.json());
app.use(express.static("./public"))


app.get("/api/notes",async(req,res)=>{
    const AllNotes = await noteModel.find();

    res.status(200).json({
        AllNotes:AllNotes
    })
})

app.post("/api/notes",async (req,res)=>{

    const {title,description} = req.body;
    const createdNote = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note created successfully",
        note : createdNote
    })
})

app.delete("/api/notes/:id",async(req,res)=>{

    const DeletedNote = await noteModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message:"note Deleted Successfully",
        DeletedNote:DeletedNote
    })

})

app.patch("/api/notes/:id",async(req,res)=>{
       const {title,description} = req.body;
    const updatedNote = await noteModel.findByIdAndUpdate(req.params.id,{
        title,description
    })
    res.status(200).json({
        message:"note updated Successfully",
        updatedNote : updatedNote   
    })
})

app.use("*name",(req,res)=>{
  res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app;