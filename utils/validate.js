const { body } = require("express-validator");

// Validation middleware for category and item forms

const categoryValidate = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required"),
];

const itemsValidate = [
    ...categoryValidate,
    body("quantity")
        .trim()
        .notEmpty()
        .withMessage("Quantity is required")
        .isInt({ min: 1 })
        .withMessage("Quantity must be greater than 0"),
    body("amount")
        .trim()
        .notEmpty()
        .withMessage("Amount is required")
        .isInt({ min: 1 })
        .withMessage("Amount must be greater than 0"),
    body("decimal")
        .optional({ checkFalsy: true })
        .isInt({ min: 0, max: 99 })
        .withMessage("Decimal must be between 0 and 99"),
];

module.exports = { categoryValidate, itemsValidate };
