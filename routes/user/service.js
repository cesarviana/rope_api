const db = require('@app/sequelize');

module.exports = {
    async save(user) {
        return db.user.create(user)
    }
};