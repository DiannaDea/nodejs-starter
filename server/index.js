const http = require('http')
const config = require('config')
const app = require('./app')
const logger = require('../services/logger')

const {port} = config.app

http
    .createServer(app.callback())
    .listen(port, (err) => ((err)
    ? logger.error('Error in running server', err)
    : logger.info(`Server running on port ${port}`)))
