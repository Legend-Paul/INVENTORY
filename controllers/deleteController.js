const query = require("../db/query");

const deleteCategory = async (req, res) => {
    const id = req.params.id;
    await query.deleteCategory(id);
    res.redirect("/");
};

const deleteItem = async (req, res) => {
    const id = req.params.id;
    const categoryId = req.query.category;
    await query.deleteItem(id);
    res.redirect(`/items?category=${categoryId}`);
};

module.exports = {
    deleteCategory,
    deleteItem,
};
