const UUID = '8905026c-110b-4e35-9269-88c058b42bba';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('tasks', [
            {
                id: UUID,
                mat: `[
                [0, 0, 0, 0, 1], 
                [0, 0, 0, 2, 0],
                [1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
            ]`,
                createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
                updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('tasks', {
            id: UUID
        });
    }
};
