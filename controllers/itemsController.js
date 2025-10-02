const query = require("../db/query");

const getCategoryItems = async (req, res) => {
    try {
        const categoryId = req.query.category;
        const items = await query.getItemsByCategoryId(categoryId);
        const category = await query.getCategoryById(categoryId);

        const categoryName = category[0].name;
        res.render("items", { items, categoryName });
    } catch (err) {
        throw err;
    }
};

module.exports = {
    getCategoryItems,
};
