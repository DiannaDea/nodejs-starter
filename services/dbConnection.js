const config = require('config')
const Mongoose = require('mongoose')
const logger = require('../services/logger')

Mongoose.Promise = global.Promise

const {
  host,
  name,
  port
} = config['mongo-db']

const connString = `mongodb://${host}:${port}/${name}`

Mongoose
    .connect(connString, {useNewUrlParser: true})
    .then(() => {
      logger.info('Connection to MongoDB has been established successfully.')
    })
    .catch((err) => {
      logger.error('Unable to connect to the MongoDB database:', err)
    })
