const express = require("express");
const app = express();
const envConfig = require("./config/config");
const connectDB = require("./config/db");
const cors = require("cors");
const port = envConfig.PORT || 4000;
const userRoutes = require("./routes/user.routes");
const categoryRoute = require("./routes/category.routes");

// Database connection
connectDB();

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api',userRoutes);
app.use('/api',categoryRoute);


// Base Url
app.get("/", (req, res) => {
  res.json({ msg: "welcome to the Bongo-Bazaar Server !" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
