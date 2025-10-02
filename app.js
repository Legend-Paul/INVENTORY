const express = require("express");
const pool = require("./db/pool");
const path = require("node:path");
require("dotenv").config();
const homeRouter = require("./routes/homeRouter");
const itemsRouter = require("./routes/itemsRouter");
const newRouter = require("./routes/newRouter");
const query = require("./db/query");
const errorController = require("./controllers/errorController");
const CustomError = require("./error/customError");
const { get } = require("node:http");

const app = express();
const PORT = process.env.PORT || 3000;

// query
//     .getCategoryItems()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/items", itemsRouter);
app.use("/", homeRouter);

pool.connect((err, client, release) => {
    if (err) throw new CustomError("Database connection failed", 500);
    console.log("Database connected");
    release();
});

app.use(errorController);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
});
