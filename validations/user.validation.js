const { body } = require("express-validator");

module.exports.registerValidation = [
  body("name").not().isEmpty().trim().withMessage("Name is Required."),
  body("email").isEmail().normalizeEmail().withMessage("Email is Required"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password should be 6 character long."),
];
