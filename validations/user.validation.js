const { body } = require("express-validator");

// Register validation
module.exports.registerValidation = [
  body("name").not().isEmpty().trim().withMessage("Name is Required."),
  body("email").isEmail().normalizeEmail().withMessage("Email is Required"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password should be 6 character long."),
];
// Login validation
module.exports.loginValidation = [
  body("email").isEmail().normalizeEmail().withMessage("Email is Required"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is Required."),
];
