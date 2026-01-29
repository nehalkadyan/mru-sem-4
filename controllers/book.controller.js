const  Author = require('../models/Author.model');
const Book = require('../models/Book.model');

// controller to publish a book
const publishBook = async (req, res) => {
    try {
        const { title, authorId, publishedYear, description } = req.body;
        const book = new Book({
            title,
            authorId: authorId,
            publishedYear,
            description
        }); //after this data is saved in server
        await book.save(); // saving to database
        return res.status(201).json({ message: 'Book published successfully', book });
    }
    catch (err) {
        console.log("err", err);
    }
}

module.exports = { publishBook };