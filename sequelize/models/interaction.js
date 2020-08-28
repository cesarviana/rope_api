const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Interaction extends Model {
    static associate(models) {
      this.belongsTo(models.execution)
    }
  }
  Interaction.init({
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    type: DataTypes.STRING,
    instant: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'interaction'
  });
  return Interaction;
};