const pool = require("./pool");

const insertSomeItems = async () => {
    await pool.query(
        `INSERT INTO items (name, description, quantity, price, category_id) VALUES
      ('Tablet', 'Android tablet', 7, 300, 1),
      ('Headphones', 'Wireless headphones', 15, 80, 1),
      ('Marker', 'Permanent marker', 30, 2, 2),
      ('Folder', 'Document folder', 25, 5, 2)`
    );
};

const insertSomeCategories = async () => {
    await pool.query(
        `INSERT INTO categories (name, description) VALUES
      ('Books', 'All kinds of books'),
      ('Furniture', 'Office and home furniture'),
      ('Groceries', 'Food and household items')`
    );
};

insertSomeCategories();
insertSomeItems();
