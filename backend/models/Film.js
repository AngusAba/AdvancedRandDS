const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Film = sequelize.define('Film', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
  },
  languageId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'languages', // Ensure this matches your DB table name
      key: 'id',
    },
  },
  // Add other fields as necessary
}, {
  tableName: 'films', // Ensure this matches your DB table name
});

// Define associations
Film.associate = (models) => {
  Film.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  Film.belongsTo(models.Language, { foreignKey: 'language_id', as: 'language' });
  // Add other associations if necessary
};

module.exports = Film;
