const userGroups = [
  {
    userId: 1,
    groupIds: [1]
  },
  {
    userId: 2,
    groupIds: [1]
  },
  {
    userId: 3,
    groupIds: [2, 3]
  },
  {
    userId: 4,
    groupIds: [1, 2, 3]
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(userGroups.map(userGroup => {
      return Promise.all(userGroup.groupIds.map(groupId => {
        return queryInterface.bulkInsert('UserGroups', [{
          userId: userGroup.userId,
          groupId,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
      }))
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserGroups', null, {});
  }
};
