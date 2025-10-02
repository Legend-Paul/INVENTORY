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
    const categoryId = req.query.category;
    res.render("newItem", { categoryId });
};

const insertNewItem = async (req, res) => {
    const { name, description, quantity, amount, decimal, category } = req.body;

    try {
        const decimalPlace = decimal ? parseInt(decimal) : 0;
        const price =
            parseInt(amount) + parseFloat(decimalPlace.toFixed(2, 0) / 100);
        console.log(name, description, quantity, price.toFixed(2, 0), category);
        await query.insertNewItem(name, price, quantity, description, category);
        res.redirect(`/items?category=${category}`);
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
