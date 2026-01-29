const mongoose = require("mongoose");
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

const getAuthorBooks = async (req, res) => {
  try {
    const { authorId } = req.params;
    // 6971cc053733b9880be3aaac
    // perform aggregation
    const data = await Author.aggregate([
      // stage 1
      {
        $match: {
          _id: new mongoose.Types.ObjectId(authorId),
        },
      },
      // stage 2
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "authorId",
          as: "book-details",
        },
      },

      // stage 3
      {
        $unwind: {
          path: "$book-details",
        },
      },
    ]);
    return res
      .status(200)
      .json({ message: "author details fetched successfully", result: data });
  } catch (err) {
    console.log("err", err.message);
  }
};

const getAuthors = async (req, res) => {
  try {
    const page = parseInt(req.query.page); // "1" -> 1 (Number)
    const limit = parseInt(req.query.limit); // "2" -> 2 (Number)

    // skip formula
    const skip = (page - 1) * limit;
    // aggregation pipeline
    const data = await Author.aggregate([
      // stage 1
      {
        $sort: {
          createdAt: -1,
        },
      },
      // stage 2
      {
        $skip: skip,
      },
      // stage 3
      {
        $limit: limit,
      },
    ]);

    const totalCount = await Author.countDocuments();
    //  200 ->success (OK response)
    // 201 -> created
    return res
      .status(200)
      .json({
        message: "author data fetched successfully",
        result: { ...data, totalCount },
      });
  } catch (err) {
    console.log("err", err.message);
  }
};

module.exports = { createAuthor, getAuthorBooks, getAuthors };
