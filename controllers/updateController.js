const query = require("../db/query");
const pool = require("../db/pool");

// Categories update controllers
const openUpdateCategoryPage = async (req, res) => {
    const id = req.params.id;
    const categoryId = req.query.category;
    const { name, description } = await query.getCategoryById(id);
    res.render("newCategory", {
        title: "Update Category",
        path: `/update/category/${id}`,
        btnText: "Update Category",
        name,
        description,
        categoryId,
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
    const categoryId = req.query.category;
    const { name, description, quantity, price, category_id } =
        await query.getItemById(id);

    const [amount, decimal] = price.toString().split(".");

    res.render("newItem", {
        title: "Update Item",
        btnText: "Update Item",
        path: `/update/item/${id}?category=${categoryId}`,
        name,
        description,
        quantity,
        amount,
        decimal,
        selectedCategory: category_id,
    });
};

const updateItem = async (req, res) => {
    const id = req.params.id;
    const categoryId = req.query.category;
    const { name, description, quantity, amount, decimal } = req.body;
    const price = parseFloat(`${amount}.${decimal ? decimal : "00"}`);
    await query.updateItem(id, name, price, quantity, description);
    res.redirect(`/items?category=${categoryId}`);
};

module.exports = {
    openUpdateCategoryPage,
    updateCategory,
    openUpdateItemPage,
    updateItem,
};
