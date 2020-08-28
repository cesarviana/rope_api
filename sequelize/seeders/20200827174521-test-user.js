const UUID = '0efcdbf9-d10b-4954-98f5-2ee48677b30b';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('users', [
            {
                id: UUID,
                name: 'Cesar',
                birthDate: '1994-12-29',
                gender: 'M',
                createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
                updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', {id: UUID});
    }
}
;
