const query = require("../db/query");
const CustomError = require("../error/customError");

// Get all categories

const getAllCategories = async (req, res) => {
    try {
        const categories = await query.getAllCategories();
        const categoryCount = await query.getCategorycount();
        const items = await query.getItemCount();
        const quantities = await query.getTotalQuantity();
        const price = await query.getTotalPrice();
        res.render("home", {
            categories,
            categoryCount,
            items,
            quantities,
            price,
        });
    } catch (err) {
        throw new CustomError("Failed to load categories", 500);
    }
};

module.exports = {
    getAllCategories,
};
