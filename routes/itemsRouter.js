const express = require("express");
const itemsController = require("../controllers/itemsController");

const itemsRouter = express.Router();

itemsRouter.get("/", itemsController.getCategoryItems);
// itemsRouter.get("/:id", itemsController.getItemById);
// itemsRouter.post("/", itemsController.createItem);
// itemsRouter.put("/:id", itemsController.updateItem);
// itemsRouter.delete("/:id", itemsController.deleteItem);

module.exports = itemsRouter;
