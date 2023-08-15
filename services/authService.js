const bcrypt = require("bcrypt");

module.exports.hashedPassword = async (password) => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
};
