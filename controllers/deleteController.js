const query = require("../db/query");

const deleteCategory = async (req, res) => {
    const id = req.params.id;
    await query.deleteCategory(id);
    res.redirect("/");
};

module.exports = {
    deleteCategory,
};
