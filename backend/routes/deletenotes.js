const note = require('../model/note'); 
const express = require('express');
const routes = express.Router();

routes.delete('/',async (req,res)=>{
    //res.render('home.ejs')
    const id = req.body.id;
    console.log(id);
    await note.deleteOne({_id:id});
    const notes = await note.find({});
    res.json(notes);
})

module.exports = routes;