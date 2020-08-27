'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('executions', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    })
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('executions', 'userId')
  }
};
