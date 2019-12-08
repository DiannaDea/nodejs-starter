const isEqual = require('lodash.isequal');
const UserProvider = require('../providers/user');
const UserGroupsProvider = require('../providers/usergroups');
const { getUserWithGroups, getUsersWithGroups } = require('../utils');

const UserController = {
  getAll: async (ctx) => {
    try {
      const users = await UserProvider.getUsers();

      if (!users || !users.length) {
        return ctx.send(204, { error: 'No users found'})
      }

      const usersWithGroups = await getUsersWithGroups(users)

      return ctx.send(200, usersWithGroups);
    } catch (error) {
      return ctx.send(500, { error: error.message })
    }
  },
  create: async (ctx) => {
    try {
      const { login, fullName } = ctx.request.body;

      if (await UserProvider.getUser({login, fullName})) {
        return ctx.send(400, { error: `User with name ${fullName} already exists`})
      }

      const user = await UserProvider.createUser(ctx.request.body);

      if (!user) {
        return ctx.send(400, { error: 'Unable to create user with such params' })
      }

      const userWithGroups = getUserWithGroups(
        user,
        await UserGroupsProvider.getUserGroups(user.id)
      );

      return ctx.send(200, userWithGroups);
    } catch (error) {
      return ctx.send(500, { error: error.message })
    }
  },
  delete: async (ctx) => {
    const { userId } = ctx.params;

    try {
      const isDeleted = await UserProvider.deleteUser(userId);

      return (isDeleted)
        ? ctx.send(200, { isDeleted })
        : ctx.send(500, { error: `Unable to delete user with id: ${userId}`})
    } catch (error) {
      return ctx.send(500, { error: error.message })
    }
  },
  update: async (ctx) => {
    const { user } = ctx;
    const { userId } = ctx.params;
    const { fullName, groupIds } = ctx.request.body;

    try {
      const userGroups = await UserGroupsProvider.getUserGroups(userId)
      const userGroupIds = userGroups.map(group => group.id);

      const paramsForUpdate = {
        ...((fullName !== user.fullName) ? {fullName} : {}),
        ...(!isEqual(groupIds, userGroupIds) ? {groupIds} : {})
      }

      const isUpdated = await UserProvider.updateUser(userId, paramsForUpdate);
      
      if (isUpdated) {
        const user = await UserProvider.getUser({ id : userId})

        return ctx.send(200, getUserWithGroups(
          user,
          await UserGroupsProvider.getUserGroups(user.id)
        ))
      }

      return ctx.send(500, { error: `Unable to update user with id: ${userId}`})
    } catch (error) {
      return ctx.send(500, { error: error.message })
    }
  }
}

module.exports = UserController;
