const pick = require('lodash.pick');
const UserGroupsProvider = require('./providers/usergroups');

const getUserWithGroups = (user, userGroups) => {
  return {
    ...pick(user, ['id', 'login', 'fullName']),
    groups: userGroups.map(group => pick(group, ['id', 'name'])),
  }
}

const getUsersWithGroups = (users) => {
  return Promise.all(users.map(async (user) => {
    const userGroups = await UserGroupsProvider.getUserGroups(user.id);
    
    return getUserWithGroups(user, userGroups)
  }))
}

module.exports = {
  getUserWithGroups,
  getUsersWithGroups
}