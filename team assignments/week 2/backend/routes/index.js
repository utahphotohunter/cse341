// Imports
const router = require('express').Router();

// Define a route
router.use("/contacts", require("./contacts"));

module.exports = router;