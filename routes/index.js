const userRouter = require('./user')

module.exports = {
  routes: [
    userRouter.middleware()
  ]
}
