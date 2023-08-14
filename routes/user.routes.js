const express = require("express");
const { registerValidation } = require("../validations/user.validation");
const { createUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", registerValidation, createUser);

module.exports = router;
