const mongoose = require("mongoose");
// author schema
const authorSchema = new mongoose.Schema({
    authorName : {
        type : String
    },

    email : {
        type : String
    },

    contactNumber : {
        type : String
    }
}, 
{
    timestamps : true
})

// model

const Author = mongoose.model("Author", authorSchema);

module.exports = Author