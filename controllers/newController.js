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

module.exports = {
    openNewCategoryPage,
    insertNewCategory,
};
