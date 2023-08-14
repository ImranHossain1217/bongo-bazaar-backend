const express = require("express");
const app = express();
const envConfig = require("./config/config");
const connectDB = require("./config/db");
const port = envConfig.PORT || 4000;

// Database connection
connectDB();

// Base Url
app.get("/", (req, res) => {
  res.json({ msg: "welcome to the Bongo-Bazaar Server !" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
