module.exports = {
  up: (queryInterface, Sequelize) => {
   const groupNames = ['Administrators', 'Team A', 'Team B', 'Team C'];

   return Promise.all(groupNames.map(name => {
     return queryInterface.bulkInsert('Groups', [{
      name,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
   }))
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Groups', null, {});
  }
};
