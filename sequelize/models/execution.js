const {DataTypes, Model} = require('sequelize');
module.exports = (sequelize) => {
    class Execution extends Model {
        static associate(models) {
            this.belongsTo(models.user);
            this.belongsTo(models.task);
        }
    }

    Execution.init({
        id: { type: DataTypes.UUIDV4, primaryKey: true },
        startTime: DataTypes.DATE,
        endTime: DataTypes.DATE,
        interaction: DataTypes.ENUM('projector','buttons_only')
    }, {
        sequelize,
        modelName: 'execution'
    });
    return Execution;
};
