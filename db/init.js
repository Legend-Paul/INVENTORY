const pool = require("./pool");

const createCategoriesTable = async () => {
    try {
        pool.query(`
				CREATE TABLE IF NOT EXISTS categories (
					 id INTEGER PRIMARY KEY 
       						GENERATED ALWAYS AS IDENTITY (
							SEQUENCE NAME categories_id_seq
							START WITH 1
							INCREMENT BY 1
       									),
					name VARCHAR(100) NOT NULL,
					description TEXT
				);
			`);
    } catch (err) {
        throw err;
    }
};

const createItemsTable = async () => {
    try {
        pool.query(`
			CREATE TABLE IF NOT EXISTS items (
				id INTEGER PRIMARY KEY 
	   				GENERATED ALWAYS AS IDENTITY (
					SEQUENCE NAME items_id_seq
					START WITH 1
					INCREMENT BY 1
	   							),
				name VARCHAR(100) NOT NULL,
				price DECIMAL(10,2) NOT NULL,
				quantity INTEGER NOT NULL,
				description TEXT,
				category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
			);
		`);
    } catch (err) {
        throw err;
    }
};

createCategoriesTable();
createItemsTable();
