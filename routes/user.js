const router = require('koa-joi-router')

const userRouter = router()

const {Joi} = router

userRouter.prefix('/users')

userRouter.route({
  method: 'get',
  path: '/:username',
  validate: {
    params: {
      username: Joi.string().required()
    }
  },
  handler: (ctx) => ctx.send(200, `Hello ${ctx.params.username}`)
})

module.exports = userRouter
