const router = require('koa-joi-router');
const AuthController = require('../controllers/auth');

const authRouter = router();

const {Joi} = router;

authRouter.prefix('/auth');

authRouter.route({
  method: 'post',
  path: '/',
  validate: {
    type: 'json',
    body: {
      login: Joi.string().regex(/^[\w\d]{5,15}$/).required(),
      password: Joi.string().regex(/^[\w\d$_]{3,30}$/).required()
    },
  },
  handler: AuthController.login,
});

module.exports = authRouter;
