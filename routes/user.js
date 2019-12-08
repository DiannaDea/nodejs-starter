const router = require('koa-joi-router')
const UserConstoller = require('../controllers/user');
const { authMiddleware, checkUserExists, checkAdminRole } = require('../middleware');

const userRouter = router();

const {Joi} = router

userRouter.prefix('/api/users')

userRouter.use(authMiddleware);

userRouter.route({
  method: 'get',
  path: '/',
  handler: UserConstoller.getAll
})

userRouter.route({
  method: 'post',
  path: '/',
  validate: {
    type: 'json',
    body: {
      login: Joi.string().required(),
      password: Joi.string().required(),
      fullName: Joi.string().required(),
      groupIds: Joi.array().items(Joi.number()).required()
    },
  },
  handler: [checkAdminRole, UserConstoller.create]
})

userRouter.route({
  method: 'delete',
  path: '/:userId',
  validate: {
    params: {
      userId: Joi.number().required(),
    },
  },
  handler: [checkAdminRole, checkUserExists, UserConstoller.delete]
})

userRouter.route({
  method: 'put',
  path: '/:userId',
  validate: {
    type: 'json',
    params: {
      userId: Joi.number().required(),
    },
    body: {
      fullName: Joi.string(),
      groupIds: Joi.array().items(Joi.number())
    }
  },
  handler: [checkAdminRole, checkUserExists, UserConstoller.update]
})

module.exports = userRouter
