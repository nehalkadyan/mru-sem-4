const express = require("express");
const {createAuthor, getAuthorBooks, getAuthors} = require("../controllers/author.controller")
const router = express.Router()

router.post("/create-author", createAuthor);

router.get("/author-details/:authorId", getAuthorBooks)

router.get("/get-authors", getAuthors)

module.exports = router;