const express = require("express");
const updateController = require("../controllers/updateController");

const updateRouter = express.Router();

updateRouter.get("/category/:id", updateController.openUpdateCategoryPage);
updateRouter.post("/category/:id", updateController.updateCategory);

module.exports = updateRouter;
