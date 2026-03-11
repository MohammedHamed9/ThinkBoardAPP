const express=require("express");
const route=express.Router();
const NoteCtrl=require("../controllers/NotesController")
route.get("/",NoteCtrl.GetNotes);
route.get("/:id",NoteCtrl.GetNote);
route.post("/createNote",NoteCtrl.CreateNote);
route.patch("/updateNote/:id",NoteCtrl.updateNote);
route.delete("/deleteNote/:id",NoteCtrl.deleteNote);
module.exports=route;  