require("dotenv").config();

const express = require("express");
const sequelize = require("./config/dbConfig");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use("/api", userRoutes);
sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
