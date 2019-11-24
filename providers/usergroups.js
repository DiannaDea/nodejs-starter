const Sequelize = require('sequelize');
const { UserGroup, Group } = require('../models')

const Op = Sequelize.Op;

const UserGroupsProvider = {
  getUserGroups: async (userId) => {
    const userGroups = await UserGroup.findAll({ where: { userId } });

    const groupIds = userGroups.map(usergroup => {
      const plainUserGroup = usergroup.get({
        plain: true
      })

      return plainUserGroup.GroupId;
    })

    const groups = await Group.findAll({ where: { 
      id: { [Op.in]: groupIds }
    }});

    return groups.map(group => group.get({
      plain: true
    }))
  },
  addUserGroups: (userId, groupIds) => {
    return Promise.all(groupIds.map(groupId => {
      return UserGroup
        .build({ 
          UserId: userId,
          GroupId: groupId,
          createdAt: new Date(),
          updatedAd: new Date()
        })
        .save()
    }))
  },
  deleteUserGroups: (userId, groupIds) => {
    return Promise.all(groupIds.map(async groupId => {
      const usergroup = await UserGroup.findOne({ where: { 
        UserId: userId,
        GroupId: groupId,
      }})

      return usergroup.destroy();
    }))
  },
  getUserGroupsIds: async (userId) => {
    const userGroups = await UserGroupsProvider.getUserGroups(userId);
    return userGroups.map(group => group.id);
  }
}

module.exports = UserGroupsProvider