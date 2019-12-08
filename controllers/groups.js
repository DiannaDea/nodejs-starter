const pick = require('lodash.pick');
const GroupsProvider = require('../providers/groups');

const GroupsController = {
  getAll: async (ctx) => {
    try {
      const groups = await GroupsProvider.getGroups();

      if (!groups || !groups.length) {
        return ctx.send(204, { error: 'No groups found'})
      }

      const pickedGroups = groups.map(group => pick(group, ['id', 'name']))

      return ctx.send(200, pickedGroups);
    } catch (error) {
      return ctx.send(500, { error: error.message })
    }
  },
  getGroupUsers: async (ctx) => {
    try {
      const { groupId } = ctx.params;

      const groupUsers = await GroupsProvider.getGroupUsers(groupId);
      
      return ctx.send(200, groupUsers);
    } catch (error) {
      return ctx.send(500, { error: error.message })
    }
  },
}

module.exports = GroupsController;