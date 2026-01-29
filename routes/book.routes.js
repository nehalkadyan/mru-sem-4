const express = require("express");
const {publishBook} = require("../controllers/book.controller")
const router = express.Router();

router.post("/publish-book", publishBook);

module.exports = router
