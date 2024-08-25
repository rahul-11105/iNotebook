const express = require("express");
const main = require("./connection/connect");
const user = require("./model/user");
const note = require('./model/note');
const signup = require("./routes/signup");
const addnote = require('./routes/addnote');
const getnotes = require('./routes/getnotes');
const deletenotes = require('./routes/deletenotes');
const cookieParser = require('cookie-parser');
const path = require("path");
const {createUserUid} = require("./middlware/auth");

const cors = require('cors');
//const { title } = require("process");

/*const note1 = new note({
    title:'day-plan',
    description:'we have to do some task today',
    tag:'wed.',

});

note1.save().then((res)=>{
    console.log('note saved successfully');
})*/

/*const bcrypt = require('bcryptjs');

const createSalt = async ()=>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('rahul',salt);

    console.log(salt);
    console.log(hash);
}

createSalt();*/

const app = express(); 
const port = 8000;

app.use(cors()); // Enable CORS for all routes

app.use(express.static(path.join(__dirname, 'public')));
 
app.set("view engine","ejs");   


app.set("views",path.resolve("./views"));

main("mongodb://localhost:27017/Authentication").then((data)=>{
    console.log("mongoDb connected successfully!");
}) 
.catch((err)=>{
    console.log("mongoDB connection error!");
})

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());  // This middleware is necessary to parse cookies;
app.use(express.json());

//routes;
app.use('/getnotes',getnotes);
app.use('/deletenotes',deletenotes);
app.use('/addnote',addnote);
app.use("/home1",createUserUid,signup);
app.get("/home",(req,res)=>{
    res.render("home.ejs");
})
app.listen(port,()=>console.log(`server started successfuly at port ${port}.`)); 