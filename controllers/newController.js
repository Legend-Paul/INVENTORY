const query = require("../db/query");

const CustomError = require("../error/customError");

// Render form to create a new category
const openNewCategoryPage = (req, res) => {
    res.render("newCategory");
};

const insertNewCategory = async (req, res) => {
    const { name, description } = req.body;
    try {
        console.log(name, description);
        await query.insertNewCategory(name, description);
        res.redirect("/");
    } catch (err) {
        throw err;
    }
};

const openNewItemPage = async (req, res) => {
    res.render("newItem");
};

const insertNewItem = async (req, res) => {
    const { name, description, quantity, price, category_id } = req.body;
    try {
        console.log(name, description, quantity, price, category_id);
        await query.insertNewItem(
            name,
            description,
            quantity,
            price,
            category_id
        );
        res.redirect("/");
    } catch (err) {
        throw err;
    }
};

module.exports = {
    openNewCategoryPage,
    insertNewCategory,
    openNewItemPage,
    insertNewItem,
};
