const { User } = require('../models')
const UserGroupsProvider = require('./usergroups');

const UserProvider = {
  getUser: async (params) => {
    const user = await User.findOne({ where: params });

    return user
      ? user.get({ plain: true })
      : null;
  },

  getUsers: (includeAdmins = false) => {
    const condition = {
      ...(includeAdmins ? {} : {isAdmin: false})
    }
    const users = User.findAll({ where: condition});

    return users.map(user => user.get({ plain: true }))
  },

  createUser: async (params) => {
    const { groupIds, ...userInfo } = params;

    const user = await User
      .build({ 
        ...userInfo,
        isAdmin: false,
        createdAt: new Date(),
        updatedAd: new Date()
       })
      .save()

    const createdUser = user.get({ plain: true });
    await UserGroupsProvider.addUserGroups(createdUser.id, groupIds);

    return createdUser
  },

  deleteUser: async (userId) => {
    try {
      const user = await User.findOne({ where: {id : userId} });

      const userToDelete = user.get({ plain: true })
      const userGroupsIds = await UserGroupsProvider.getUserGroupsIds(userId)

      await UserGroupsProvider.deleteUserGroups(userToDelete.id, userGroupsIds);
      await user.destroy();

      return true;
    } catch (error) {
      return false;
    }
  },

  updateUser: async (userId, params) => {
    try {
      const { fullName, groupIds } = params;

      if (groupIds && groupIds.length) {
        // detele old user groups
        await UserGroupsProvider.deleteUserGroups(
          userId,
          await UserGroupsProvider.getUserGroupsIds(userId)
        );

        // add new groups
        await UserGroupsProvider.addUserGroups(userId, groupIds);
      }

      if (fullName) {
        await User.update({ fullName }, { where: { id: userId }});
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = UserProvider;