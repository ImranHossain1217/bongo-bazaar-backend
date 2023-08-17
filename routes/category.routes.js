const express = require("express");
const { categoryValidation } = require("../validations/category.validation");
const { createCategory, AllCategories } = require("../controllers/category.controller");
const { authorization } = require("../services/authorization");
const router = express.Router();

router.post("/create-category", [categoryValidation,authorization], createCategory);
router.get("/categories/:page",authorization,AllCategories);

module.exports = router;
