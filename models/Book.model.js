const mongoose = require("mongoose");
// author schema
const bookSchema = new mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String
    },

    authorId : {
        type : mongoose.Schema.Types.ObjectId,
        // _id : 37645326736746265637
        ref : "Author"
    },
    publishedYear : {
        type : String
    }
}, 
{
    timestamps : true
})
// model
const Book = mongoose.model("Book", bookSchema);
module.exports = Book