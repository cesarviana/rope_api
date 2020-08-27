'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.SMALLINT,
    gender: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};