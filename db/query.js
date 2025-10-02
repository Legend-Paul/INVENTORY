const pool = require("./pool");

// Categories queries

const getAllCategories = async () => {
    const { rows } = await pool.query(
        `SELECT c.id, c.name, c.description, SUM(quantity) As quantity, SUM(quantity * price) AS price 
        FROM categories AS c  
        LEFT JOIN items 
        ON c.id = items.category_id GROUP BY c.id`
    );
    console.log(rows);
    return rows;
};

const insertNewCategory = async (name, description) => {
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
        "SELECT name AS item_name, description AS item_description, quantity, price FROM items WHERE category_id = $1",
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

const getCategorycount = async () => {
    const { rows } = await pool.query("SELECT COUNT(*) FROM categories");
    return rows[0].count;
};

const getCategoryTotalQuantity = async (categoryId) => {
    const { rows } = await pool.query(
        "SELECT SUM(quantity) FROM items WHERE category_id = $1",
        [categoryId]
    );
    return rows[0].sum;
};
const getCategoryTotalPrice = async (categoryId) => {
    const { rows } = await pool.query(
        "SELECT SUM(price * quantity) FROM items WHERE category_id = $1",
        [categoryId]
    );
    return rows[0].sum;
};

const getCategoryItemsCount = async (categoryId) => {
    const { rows } = await pool.query(
        "SELECT COUNT(*) FROM items WHERE category_id = $1",
        [categoryId]
    );
    return rows[0].count;
};

// Items queries
const getAllItems = async () => {
    const { rows } = await pool.query(
        `SELECT i.name As item_name, i.description AS item_description,  c.name AS category_name, i.price, i.quantity, i.id
        FROM items i JOIN categories c ON i.category_id = c.id`
    );
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

const getItemCount = async () => {
    const { rows } = await pool.query("SELECT COUNT(*) FROM items");
    return rows[0].count;
};

const getTotalQuantity = async () => {
    const { rows } = await pool.query("SELECT SUM(quantity) FROM items");
    return rows[0].sum;
};

const getTotalPrice = async () => {
    const { rows } = await pool.query(
        "SELECT SUM(price * quantity) FROM items"
    );
    return rows[0].sum;
};

module.exports = {
    getAllCategories,
    insertNewCategory,
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
    getCategorycount,
    getCategoryTotalQuantity,
    getCategoryTotalPrice,
    getCategoryItemsCount,
    getItemCount,
    getTotalQuantity,
    getTotalPrice,
};
