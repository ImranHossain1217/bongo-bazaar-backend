const { validationResult } = require("express-validator");

module.exports.createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      console.log(req.body);
    } else {
      console.log(errors.array());
    }
  } catch (error) {
    console.log(error);
  }
};
