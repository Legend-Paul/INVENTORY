const query = require("../db/query");

const getCategoryItems = async (req, res) => {
    try {
        const categoryId = req.query.category;
        const items = await query.getItemsByCategoryId(categoryId);

        res.render("items", { items });
    } catch (err) {
        throw err;
    }
};

module.exports = {
    getCategoryItems,
};
