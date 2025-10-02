const query = require("../db/query");
const CustomError = require("../error/customError");

const getCategoryItems = async (req, res) => {
    try {
        const categoryId = req.query.category;
        if (categoryId) {
            const items = await query.getCategoryItems(categoryId);
            // Fetch additional category details
            const category = await query.getCategoryById(categoryId);
            const itemsCount = await query.getCategoryItemsCount(categoryId);
            const quantities = await query.getCategoryTotalQuantity(categoryId);
            const price = await query.getCategoryTotalPrice(categoryId);
            if (category.length === 0) {
                throw new CustomError("Category not found", 404);
            }

            const categoryName = category[0].name;
            return res.render("items", {
                items,
                categoryName,
                itemsCount,
                quantities,
                price,
            });
        }
        const itemsCount = await query.getItemCount();
        const quantities = await query.getTotalQuantity();
        const price = await query.getTotalPrice();
        const items = await query.getAllItems();
        res.render("items", {
            items,
            categoryName: "All Items",
            itemsCount,
            quantities,
            price,
        });
    } catch (err) {
        throw new CustomError("Failed to load items", 500);
    }
};

module.exports = {
    getCategoryItems,
};
