
const express = require("express");
const app = express();
const bodyParser = require('body-parser');


app.get("/", (req, res) => {
  res.send("Welcome home!");
});


const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`trial app listening on ${HOST}:${PORT}`);
});
