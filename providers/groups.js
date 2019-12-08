const Sequelize = require('sequelize');
const pick = require('lodash.pick');
const { User, UserGroup, Group } = require('../models')

const Op = Sequelize.Op;

const GroupProvider = {
  getGroup: async (params) => {
    const group = await Group.findOne({ where: params });

    return group
      ? group.get({ plain: true })
      : null;
  },
  getGroups: () => {
    const groups = Group.findAll();
    return groups.map(user => user.get({ plain: true }))
  },
  getGroupUsers: async (groupId) => {
    const userGroups = await UserGroup.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('userId')) ,'userId'],
      ],
      where: { groupId }
    });

    const userIds = userGroups
      .map(usergroup => usergroup.get({
        plain: true
      }))
      .map(({userId}) => userId)

    const users = await User.findAll({ where: { 
      id: { [Op.in]: userIds }
    }});

    return users
      .map(user => user.get({
        plain: true
      }))
    .map((user) => pick(user, ['id', 'login', 'fullName']))
  }
}

module.exports = GroupProvider;