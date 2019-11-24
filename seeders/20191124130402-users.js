const users = [
  {
    login: 'diana',
    password: 'diana',
    fullName: 'Diana Baburina',
    isAdmin: true,
  },
  {
    login: 'test_user_1',
    password: 'test_user_1',
    fullName: 'Test user 1',
    isAdmin: true,
  },
  {
    login: 'test_user_2',
    password: 'test_user_2',
    fullName: 'Test user 2',
    isAdmin: false,
  },
  {
    login: 'test_user_3',
    password: 'test_user_3',
    fullName: 'Test user 3',
    isAdmin: false,
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(users.map(user => {
      return queryInterface.bulkInsert('Users', [{
        login: user.login,
        password: user.password,
        fullName: user.fullName,
        isAdmin: user.isAdmin,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
