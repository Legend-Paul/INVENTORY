const express = require("express");
const newController = require("../controllers/newController");

const newRouter = express.Router();

newRouter.get("/", newController.openNewCategoryPage);
newRouter.get("/category", newController.openNewCategoryPage);
newRouter.post("/category", newController.insertNewCategory);

module.exports = newRouter;
