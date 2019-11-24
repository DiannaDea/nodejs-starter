const userRouter = require('./user')
const authRouter = require('./auth');

module.exports = {
  routes: [
    userRouter.middleware(),
    authRouter.middleware()
  ]
}
