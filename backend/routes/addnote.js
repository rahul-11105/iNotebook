const note = require('../model/note'); 
const express = require('express');
const routes = express.Router();

routes.post('/',(req,res)=>{
    //res.render('home.ejs')
    const {title,description,tag} = req.body;
    console.log(title); 
    const note1 = new note({
        title:title,
        description:description,
        tag:tag,
    });
    note1.save().then(()=>{
        console.log('congratulation rahul your note get saved successfully.. thank you');
    })
})

module.exports = routes;