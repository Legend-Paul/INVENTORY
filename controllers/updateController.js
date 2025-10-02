const query = require("../db/query");
const pool = require("../db/pool");

const openUpdateCategoryPage = async (req, res) => {
    const id = req.params.id;
    const { name, description } = await query.getCategoryById(id);
    res.render("newCategory", {
        title: "Update Category",
        path: `/update/category/${id}`,
        btnText: "Update Category",
        name,
        description,
    });
};

const updateCategory = async (req, res) => {
    const { name, description } = req.body;
    await query.updateCategory(req.params.id, name, description);
    res.redirect("/");
};

module.exports = {
    openUpdateCategoryPage,
    updateCategory,
};
