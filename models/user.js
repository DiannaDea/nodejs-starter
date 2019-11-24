module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  }, {});

  User.associate = function(models) {
    User.hasMany(models.UserGroup, { as: 'userId' } );
  };

  return User;
};