const express = require("express");
const newController = require("../controllers/newController");

const newRouter = express.Router();

newRouter.get("/", newController.createNewCategory);
newRouter.get("/category", newController.createNewCategory);

module.exports = newRouter;
