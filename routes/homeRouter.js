const express = require("express");
const categoriesController = require("../controllers/categoriesController");

const homeRouter = express.Router();

homeRouter.get("/", categoriesController.getAllCategories);

module.exports = homeRouter;
