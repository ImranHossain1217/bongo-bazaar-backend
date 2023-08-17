const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
},{timestamps:true});

const CategoryModel = mongoose.model("categorie", CategorySchema);
module.exports = CategoryModel;
