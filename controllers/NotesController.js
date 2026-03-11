const Note=require("../models/Note")
const NoteCtrl={
    CreateNote:async(req,res,next)=>{
       try{
        const note=await Note.create(req.body);

        res.status(201).json({
            message:"the note is created",
            note
        });
       }catch(err){
        console.log(err);
        res.status(400).json({Error:err})
       }
    },
     GetNote:async(req,res,next)=>{
        try{
            if(!req.params.id)return res.status(400).json({
                message:"the id of the note please"
            })
            const note=await Note.findById(req.params.id);

        res.status(201).json({
            message:"this is the note",
            note
        });
        }catch(err){
            console.log(err);
        res.status(400).json({Error:err})
        }
  
    },
      GetNotes:async(req,res,next)=>{
        try{
            const notes=await Note.find().sort({createdAt:1});

        res.status(201).json({
            message:"this is the notes",
            notes
        });
        }catch(err){
            console.log(err);
        res.status(400).json({Error:err})
        }
    },
    updateNote:async(req,res,next)=>{
        try{
            if(!req.params.id)return res.status(400).json({
                message:"the id of the note please"
            })
        const note=await Note.findByIdAndUpdate(req.params.id,req.body,{new:true});

        res.status(201).json({
            message:"this is the note after update",
            note
        });
        }catch(err){
            console.log(err);
        res.status(400).json({Error:err})
        }
  
    },
    deleteNote:async(req,res,next)=>{
        try{
            if(!req.params.id)return res.status(400).json({
                message:"the id of the note please"
            });
           await Note.findByIdAndDelete(req.params.id);
            res.status(203).json({message:"the Note is deleted"})
        }catch(err){
            console.log(err);
            res.status(500).json({Error:err});
        }
    }
}
module.exports=NoteCtrl;