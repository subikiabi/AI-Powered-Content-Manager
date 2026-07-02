const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("AI Powered Content Manager");
});

app.listen(5000,()=>{
    console.log("Server Running");
});app.post("/generate",(req,res)=>{

const {prompt}=req.body;

res.json({

content:"AI Generated Content for : "+prompt

});

});
const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/contentmanager")
.then(()=>console.log("Database Connected"));
const Content=require("./models/Content");

app.post("/save",async(req,res)=>{

const content=new Content(req.body);

await content.save();

res.json({
message:"Saved Successfully"
});

});app.get("/contents",async(req,res)=>{

const data=await Content.find();

res.json(data);

});app.delete("/delete/:id",async(req,res)=>{

await Content.findByIdAndDelete(req.params.id);

res.json({
message:"Deleted"
});

});app.put("/update/:id",async(req,res)=>{

await Content.findByIdAndUpdate(req.params.id,req.body);

res.json({
message:"Updated"
});

});