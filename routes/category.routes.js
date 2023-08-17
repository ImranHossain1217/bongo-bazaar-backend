const express = require("express");
const { categoryValidation } = require("../validations/category.validation");
const { createCategory } = require("../controllers/category.controller");
const router = express.Router();

router.post("/create-category", categoryValidation, createCategory);

module.exports = router;
