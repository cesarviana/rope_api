'use strict';
const UUID = 'd516f62a-1330-4ced-822c-bae01b4eb97a';
const taskId = '8905026c-110b-4e35-9269-88c058b42bba';
const userId = '0efcdbf9-d10b-4954-98f5-2ee48677b30b';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('executions', [
      {
        id: UUID,
        taskId,
        userId,
        startTime: Sequelize.literal("CURRENT_TIMESTAMP"),
        endTime: Sequelize.literal("CURRENT_TIMESTAMP"),
        interaction: 'buttons_only',
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('executions', {id: UUID});
  }
};
