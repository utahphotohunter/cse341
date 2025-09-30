const mongoDB = require("../database/connection")
const ObjectId = require("mongodb").ObjectId

const getAll = async(req, res, next) => {
    const result = await mongoDB.getDb().db("cse341").collection("contacts").find();
    result.toArray().then((contacts) => {
        res.setHeader("content-type", "application/json");
        res.status(200);
        res.json(contacts);
    });
}

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

module.exports = {
    getAll,
    getSingle
};