const Koa = require('koa')
const respond = require('koa-respond')
const logger = require('koa-logger')
const cors = require('koa-cors');
const {routes} = require('../routes')

require('../services/dbConnection')

const app = new Koa()

app.use(respond())
app.use(logger())
app.use(cors());

routes.forEach((route) => app.use(route))

module.exports = app
