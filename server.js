// Import Express
const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Tutorial");
});

// Port
const port = 3000;

// Start the server
app.listen(process.env.port || port);
console.log(`Web server is listening at port ${(process.env.port || port)}`);
