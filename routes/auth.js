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
      login: Joi.string().required(),
      password: Joi.string().required()
    },
    output: {
      200: {
        body: {
          token: Joi.string().required(),
        }
      },
      404: {
        body: {
          error: Joi.string().required()
        }
      }
    }
  },
  handler: AuthController.login,
});

module.exports = authRouter;
