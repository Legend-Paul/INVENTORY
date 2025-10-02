const query = require("../db/query");
const pool = require("../db/pool");

// Categories update controllers
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

// Items update controllers
const openUpdateItemPage = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const { name, description, quantity, price, category_id } =
        await query.getItemById(id);
    console.log(name, description, quantity, price, category_id);
    const [amount, decimal] = price.toString().split(".");

    res.render("newItem", {
        title: "Update Item",
        btnText: "Update Item",
        path: `/update/item/${id}`,
        name,
        description,
        quantity,
        amount,
        decimal,
        selectedCategory: category_id,
    });
};

module.exports = {
    openUpdateCategoryPage,
    updateCategory,
    openUpdateItemPage,
};
