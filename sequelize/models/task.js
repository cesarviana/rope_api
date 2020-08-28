const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize ) => {
  class Task extends Model {
  }
  Task.init({
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    mat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'task'
  });
  return Task;
};