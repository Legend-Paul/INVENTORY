const query = require("../db/query");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");

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

const updateCategory = [
    validate.categoryValidate,
    async (req, res) => {
        const { name, description } = req.body;
        const id = req.params.id;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render("newCategory", {
                title: "Update Category",
                path: `/update/category/${id}`,
                btnText: "Update Category",
                errors: errors.array(),
            });
        }
        await query.updateCategory(id, name, description);
        res.redirect("/");
    },
];

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
