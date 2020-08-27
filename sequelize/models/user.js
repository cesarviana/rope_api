'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    gender: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};