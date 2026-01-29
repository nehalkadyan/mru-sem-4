const express = require("express");
const mongoose = require("mongoose");
const app = express();

// middleware to parse json

app.use(express.json())
const authorRoute = require("./routes/author.routes")
const bookRoute = require("./routes/book.routes")

// connect to db

mongoose
  .connect(
    "mongodb+srv://kadyannehal333_db_user:0oATjmLP1J5OuKYX@cluster0.dcmap6a.mongodb.net/?appName=Cluster0",
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

app.use("/api", authorRoute) 
app.use("/api", bookRoute)

// listen to server on port 4000

app.listen(4000, () => {
    console.log("Server is listening on port 4000")
})
