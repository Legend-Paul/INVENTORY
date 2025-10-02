const errorController = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).render("error", { message, statusCode: status });
};

module.exports = errorController;
