const query = require("../db/query");

// Get all categories

const getAllCategories = async (req, res) => {
    try {
        const categories = await query.getAllCategories();
        res.render("home", { categories });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllCategories,
};
