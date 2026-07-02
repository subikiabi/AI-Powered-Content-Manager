const mongoose=require("mongoose");

const ContentSchema=new mongoose.Schema({

prompt:String,

content:String

});

module.exports=mongoose.model("Content",ContentSchema);