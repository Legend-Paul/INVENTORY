const express = require("express");
const updateController = require("../controllers/updateController");

const updateRouter = express.Router();

updateRouter.get("/category/:id", updateController.openUpdateCategoryPage);
updateRouter.post("/category/:id", updateController.updateCategory);

updateRouter.get("/item/:id", updateController.openUpdateItemPage);
updateRouter.post("/item/:id", updateController.updateItem);

module.exports = updateRouter;
