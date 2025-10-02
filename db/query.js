const pool = require("./pool");

// Categories queries
const getAllCategories = async () => {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
};

const addCategory = async (name, description) => {
    await pool.query(
        "INSERT INTO categories (name, description) VALUES ($1, $2)",
        [name, description]
    );
};

const getCategoryById = async (categoryId) => {
    const { rows } = await pool.query(
        "SELECT * FROM categories WHERE id = $1",
        [categoryId]
    );
    return rows;
};

const getCategoryItems = async (categoryId) => {
    const { rows } = await pool.query(
        "SELECT * FROM items WHERE category_id = $1",
        [categoryId]
    );
    return rows;
};

const deleteCategory = async (categoryId) => {
    await pool.query("DELETE FROM categories WHERE id = $1", [categoryId]);
};

const updateCategory = async (categoryId, name, description) => {
    await pool.query(
        "UPDATE categories SET name = $1, description = $2 WHERE id = $3",
        [name, description, categoryId]
    );
};

// Items queries
const getAllItems = async () => {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
};

const getItemById = async (itemId) => {
    const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [
        itemId,
    ]);
    return rows;
};

const getItemsByCategoryId = async (categoryId) => {
    const { rows } = await pool.query(
        "SELECT * FROM items WHERE category_id = $1",
        [categoryId]
    );
    return rows;
};

const addItem = async (name, description, quantity, category_id) => {
    await pool.query(
        "INSERT INTO items (name, description, quantity, category_id) VALUES ($1, $2, $3, $4)",
        [name, description, quantity, category_id]
    );
};

const updateItem = async (itemId, name, description, quantity, category_id) => {
    await pool.query(
        "UPDATE items SET name = $1, description = $2, quantity = $3, category_id = $4 WHERE id = $5",
        [name, description, quantity, category_id, itemId]
    );
};

const deleteItem = async (itemId) => {
    await pool.query("DELETE FROM items WHERE id = $1", [itemId]);
};

module.exports = {
    getAllCategories,
    addCategory,
    getCategoryById,
    getCategoryItems,
    deleteCategory,
    updateCategory,
    getAllItems,
    getItemById,
    getItemsByCategoryId,
    addItem,
    updateItem,
    deleteItem,
};
