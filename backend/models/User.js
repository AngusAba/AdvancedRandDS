const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  // Add other fields as necessary
}, {
  tableName: 'users', // Ensure this matches your DB table name
});

// Define associations
User.associate = (models) => {
  User.hasMany(models.Film, { foreignKey: 'user_id', as: 'rentedFilms' });
};

module.exports = User;
