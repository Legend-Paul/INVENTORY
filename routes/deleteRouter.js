const express = require("express");
const deleteController = require("../controllers/deleteController");

const deleteRouter = express.Router();
deleteRouter.get("/category/:id", deleteController.deleteCategory);

module.exports = deleteRouter;
