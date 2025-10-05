const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contacts");

// ------------------------------------------------
// GET routes
// ------------------------------------------------
router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getSingle);

// ------------------------------------------------
// POST route
// ------------------------------------------------
router.post("/", contactsController.insertContact);

// ------------------------------------------------
// PUT route
// ------------------------------------------------
router.put("/:id", contactsController.updateContact);

// ------------------------------------------------
// DELETE route
// ------------------------------------------------
router.delete("/:id", contactsController.deleteContact);

// ------------------------------------------------
// EXPORTS
// ------------------------------------------------
module.exports = router;