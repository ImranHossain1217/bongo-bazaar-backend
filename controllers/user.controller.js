const { validationResult } = require("express-validator");
const UserModel = require("../models/user.model");
const { hashedPassword } = require("../services/authService");

// @Create New User
// @Register Post method
module.exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    try {
      const emailExist = await UserModel.findOne({ email: email });
      if (!emailExist) {
        const hashed = await hashedPassword(password);
        const user = await UserModel.create({
          name,
          email,
          password: hashed,
        });
        return res.status(201).json({ msg: "Your account has been created." });
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: `${email} already exist.` }] });
      }
    } catch (error) {
      return res.status(500).json("Server Internal Error.");
    }
  } else {
    return res.status(400).json({ errors: errors.array() });
  }
};
