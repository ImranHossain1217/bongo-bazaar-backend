const { body } = require("express-validator");

module.exports.categoryValidation = [
  body("name").not().isEmpty().trim().withMessage("Category is Required."),
];
