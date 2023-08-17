const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const envConfig = require("../config/config");

// password encypt
module.exports.hashedPassword = async (password) => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
};

// match password in login
module.exports.matchPassword = async (password, dbPassword) => {
  return bcrypt.compare(password, dbPassword);
};

// create jwt token
module.exports.createToken = (user) => {
  return jwt.sign(user, envConfig.JWT_SECRET, { expiresIn: "2h" });
};
