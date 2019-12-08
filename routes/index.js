const userRouter = require('./user')
const authRouter = require('./auth');
const groupsRouter = require('./groups');

module.exports = {
  routes: [
    userRouter.middleware(),
    authRouter.middleware(),
    groupsRouter.middleware(),
  ]
}
