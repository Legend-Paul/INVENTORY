const query = require("../db/query");
const pool = require("../db/pool");

const openUpdateCategoryPage = async (req, res) => {
    const { name, description } = await query.getCategoryById(req.params.id);
    console.log(req.params.id, name, description);
    res.render("newCategory", {
        title: "Update Category",
        name,
        description,
    });
};

module.exports = {
    openUpdateCategoryPage,
};
