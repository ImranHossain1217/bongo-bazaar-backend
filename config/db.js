const mongoose = require("mongoose");
const envConfig = require("./config");

const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.URL);
    console.log("Database connect.");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
