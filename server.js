const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = ("localhost");
const mongoDB = require("./database/connection");
const bodyParser = require("body-parser");


app
  .use(bodyParser.json())
  .use((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongoDB.initDb((err, mongoDB) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on http://${host}:${port}/contacts`);
  }
});