const { validationResult } = require("express-validator");
const CategoryModel = require("../models/category.model");

// Create Category Post method
module.exports.createCategory = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name } = req.body;
    const categoryExist = await CategoryModel.findOne({ name });
    if (!categoryExist) {
      const category = await CategoryModel.create({ name });
      return res.status(201).json({ msg: "Category Created Successfully." });
    } else {
      return res
        .status(401)
        .json({ errors: [{ msg: `${name} category already Exist.` }] });
    }
  } else {
    return res.status(401).json({ errors: errors.array() });
  }
};
