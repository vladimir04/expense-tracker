const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

//Respond with "hello world" for requests that hit our root "/"
app.get("/", function(req, res) {
  res.send("hey world");
});

app.listen(port, err => {
  if (err) {
    return console.log("Oh no! Something errory happened ", err);
  }
  console.log(`server is listening on ${port}`);
});

module.exports = app;
