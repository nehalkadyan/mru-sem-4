const express = require("express");
const {createAuthor, getAuthorBooks} = require("../controllers/author.controller")
const router = express.Router()

router.post("/create-author", createAuthor);

router.get("/author-details", getAuthorBooks)

module.exports = router