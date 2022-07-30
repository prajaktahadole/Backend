const express = require("express");

const app = express();


app.get("", function (req, res) {
  res.send("hello");
  console.log("hello")
});

app.get("/books", function (req, res) {
  res.send({ 
  Book1: "wings of fire",
  Book2: "Michael Jackson",
  Book3: "Rich dad poor dad",
  Book4: "Mistery of universe",});
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
