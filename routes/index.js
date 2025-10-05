// Imports
const express = require("express");
const router = express.Router();

// Define a route
router.use("/contacts", require("./contacts"));

module.exports = router;