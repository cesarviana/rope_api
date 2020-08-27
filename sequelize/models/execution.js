'use strict';
const {DataTypes, Model} = require('sequelize');
module.exports = (sequelize) => {
    class Execution extends Model {
        static associate(models) {
            this.belongsTo(models.user);
            this.belongsTo(models.task);
        }
    }
    Execution.init( {
        startTime: DataTypes.DATE,
        endTime: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'execution'
    });
    return Execution;
};
