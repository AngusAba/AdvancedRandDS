const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Sakila database name
  process.env.DB_USER, // Your database username
  process.env.DB_PASSWORD, // Your database password
  {
    host: process.env.DB_HOST, // Your database host (e.g., localhost)
    dialect: 'mysql', // Sakila uses MySQL
    logging: false, // Disable logging for cleaner output
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
