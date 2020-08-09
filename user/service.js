const sequelize = require('../sequelize')

module.exports = {
    async save(user) {
        return sequelize.models.user.create(user)
    }
}