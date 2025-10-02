const query = require("../db/query");

const getCategoryItems = async (req, res) => {
    try {
        const categoryId = req.query.category;
        if (categoryId) {
            const items = await query.getItemsByCategoryId(categoryId);
            const category = await query.getCategoryById(categoryId);

            const categoryName = category[0].name;
            return res.render("items", { items, categoryName });
        }
        const items = await query.getAllItems();
        res.render("items", { items, categoryName: "All Items" });
    } catch (err) {
        throw err;
    }
};

module.exports = {
    getCategoryItems,
};
