const express = require("express");
const pool = require("./db/pool");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

pool.connect((err, client, release) => {
    if (err) throw err;
    console.log("Database connected");
    release();
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
});
