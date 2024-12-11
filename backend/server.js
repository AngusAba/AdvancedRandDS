require("dotenv").config();

const express = require("express");
const sequelize = require("./config/dbConfig");
const userRoutes = require("./router/userRoutes");
const app = express();
app.use(express.json());
app.use("/api", userRoutes);
sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running on port 3000"));
});
