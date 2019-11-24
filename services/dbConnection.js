const config = require('config')
const Sequelize = require('sequelize');
const logger = require('../services/logger')

const {
  host,
  name,
  user,
  password
} = config.db

const sequelize = new Sequelize(name, user, password, {
  host,
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.');
  })
  .catch(err => {
    logger.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;