module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
  }, {});

  UserGroup.associate = function(models) {};

  return UserGroup;
};