const db = require('../sequelize');

module.exports = {
    async save(user) {
        return db.user.create(user)
    }
};