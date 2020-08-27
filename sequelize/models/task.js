'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize ) => {
  class Task extends Model {
  }
  Task.init({
    mat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'task',
  });
  return Task;
};