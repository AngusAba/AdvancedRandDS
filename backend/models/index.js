const fs = require('fs');
const path = require('path');
const sequelize = require('../config/dbConfig');

const models = {};

// Dynamically import all models
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    models[model.name] = model;
  });

// Define associations
const { Film, User } = models;

// Example: If Film has a relation with Language
// models.Film.belongsTo(models.Language, { foreignKey: 'language_id', as: 'language' });

// Synchronize models with the database
Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = sequelize.Sequelize;

module.exports = models;
