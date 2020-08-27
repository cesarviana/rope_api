const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Interaction extends Model {
    static associate(models) {
      this.belongsTo(models.execution)
    }
  }
  Interaction.init({
    type: DataTypes.STRING,
    instant: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Interaction',
  });
  return Interaction;
};