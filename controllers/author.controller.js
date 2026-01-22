const Author = require("../models/Author.model");

// controller tp create author
const createAuthor = async (req, res) => {
  try {
    const { authorName, contactNumber, email } = req.body;

    // create author
    const author = new Author({
      authorName,
      contactNumber,
      email,
    });
    // save author
    await author.save();
    return res
      .status(201)
      .json({ message: "Author created successfully", author });
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = {createAuthor}