const express = require("express");
const { registerValidation, loginValidation } = require("../validations/user.validation");
const { createUser, userLogin } = require("../controllers/user.controller");
const router = express.Router();

// Register
router.post("/register", registerValidation, createUser);

// Login
router.post("/login",loginValidation,userLogin);

module.exports = router;
