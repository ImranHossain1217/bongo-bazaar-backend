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
      return res
        .status(201)
        .json({ msg: "Your category has created Successfully." });
    } else {
      return res
        .status(401)
        .json({ errors: [{ msg: `${name} category already Exist.` }] });
    }
  } else {
    return res.status(401).json({ errors: errors.array() });
  }
};

// all categories get method

module.exports.AllCategories = async (req, res) => {
  const page = req.params.page;
  const perPage = 3;
  const skip = (page - 1) * perPage;

  try {
    const count = await CategoryModel.find({}).countDocuments();
    const categories = await CategoryModel.find()
      .skip(skip)
      .limit(perPage)
      .sort({ updatedAt: -1 });
    return res.status(200).json({ categories, count, perPage });
  } catch (error) {
    return res.status(500).json("Server Interrnal Error.");
  }
};
