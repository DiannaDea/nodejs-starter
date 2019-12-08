const router = require('koa-joi-router');
const GroupsController = require('../controllers/groups');
const { authMiddleware, checkGroupExists } = require('../middleware');

const groupsRouter = router();

const {Joi} = router;

groupsRouter.prefix('/api/groups');

groupsRouter.use(authMiddleware);

groupsRouter.route({
  method: 'get',
  path: '/',
  handler: GroupsController.getAll
})

groupsRouter.route({
  method: 'get',
  path: '/:groupId/users',
  validate: {
    params: {
      groupId: Joi.number().required(),
    },
  },
  handler: [checkGroupExists, GroupsController.getGroupUsers]
})

module.exports = groupsRouter;
