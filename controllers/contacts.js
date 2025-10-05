const mongoDB = require("../database/connection");
const ObjectId = require("mongodb").ObjectId;

// ------------------------------------------------
// GET logic
// ------------------------------------------------
const getAll = async (req, res, next) => {
  const result = await mongoDB
    .getDb()
    .db("cse341")
    .collection("contacts")
    .find();
  result.toArray().then((contacts) => {
    res.setHeader("content-type", "application/json");
    res.status(200);
    res.json(contacts);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongoDB
    .getDb()
    .db("cse341")
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

// ------------------------------------------------
// POST logic
// ------------------------------------------------
const insertContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongoDB
    .getDb()
    .db("cse341")
    .collection("contacts")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occured while inserting the contact."
      );
  }
};

// ------------------------------------------------
// PUT logic
// ------------------------------------------------
const updateContact = async (req, res) => {
  const userID = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongoDB
    .getDb()
    .db("cse341")
    .collection("contacts")
    .replaceOne({ _id: userID }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occured while inserting the contact."
      );
  }
};

// ------------------------------------------------
// DELETE logic
// ------------------------------------------------

const deleteContact = async (req, res) => {
  const userID = new ObjectId(req.params.id);
  const response = await mongoDB
    .getDb()
    .db("cse341")
    .collection("contacts")
    .deleteOne({ _id: userID }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occured while inserting the contact."
      );
  }
};

// ------------------------------------------------
// EXPORTS
// ------------------------------------------------
module.exports = {
  getAll,
  getSingle,
  insertContact,
  updateContact,
  deleteContact
};
