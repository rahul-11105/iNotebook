const note = require('../model/note'); 
const express = require('express');
const routes = express.Router();

routes.get('/',async (req,res)=>{
    //res.render('home.ejs')
    const notes = await note.find({});
    res.json(notes)
})

module.exports = routes;