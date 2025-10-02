const query = require("../db/query");

const CustomError = require("../error/customError");

// Render form to create a new category
const openNewCategoryPage = (req, res) => {
    res.render("newCategory", {
        title: "New Category",
        path: "/new/category",
        btnText: "Add Category",
    });
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

// Render form to create a new item
const openNewItemPage = async (req, res) => {
    const categoryId = req.query.category;
    res.render("newItem", {
        categoryId,
        title: "New Item",
        path: `/new/item?category=${categoryId}`,
        btnText: "Add Item",
    });
};

const insertNewItem = async (req, res) => {
    const { name, description, quantity, amount, decimal, category } = req.body;
    const categoryId = req.query.category;

    try {
        const decimalPlace = decimal ? parseInt(decimal) : 0;
        const price =
            parseInt(amount) + parseFloat(decimalPlace.toFixed(2, 0) / 100);
        await query.insertNewItem(
            name,
            price,
            quantity,
            description,
            categoryId
        );
        res.redirect(`/items?category=${categoryId}`);
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
