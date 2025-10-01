const express = require("express");
const pool = require("./db/pool");
const path = require("node:path");
require("dotenv").config();
const homeRouter = require("./routes/homeRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", homeRouter);

pool.connect((err, client, release) => {
    if (err) throw err;
    console.log("Database connected");
    release();
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
});
