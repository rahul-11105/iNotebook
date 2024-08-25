const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true,
        },
        description:{
            type:String,
            require:true,
        },
        tag:{
            type:String,
        },
        date:{
            type:Date,
            default: Date.now,
        }
    }
);

const note = mongoose.model('note',noteSchema);
module.exports = note;