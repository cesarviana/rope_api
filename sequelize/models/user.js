const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    gender: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'user'
  });
  return User;
};