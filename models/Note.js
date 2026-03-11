const mongoose=require("mongoose");
const NoteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        require:true,
        trim:true,
        minLength:3,
    }
},{timestamps:true});
module.exports=mongoose.model("Notes",NoteSchema)