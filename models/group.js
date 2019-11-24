module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING
  }, {});

  Group.associate = function(models) {
    Group.hasMany(models.UserGroup, { as: 'groupId' } );
  };

  return Group;
};