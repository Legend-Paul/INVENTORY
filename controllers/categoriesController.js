const query = require("../db/query");

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
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllCategories,
};
