const query = require("../db/query");

const CustomError = require("../error/customError");

// Render form to create a new category
const createNewCategory = (req, res) => {
    res.render("newCategory");
};

module.exports = {
    createNewCategory,
};
