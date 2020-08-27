const db = require('@app/sequelize');

module.exports = {
    async save(taskExecution) {
        return db.execution.create(taskExecution)
    }
};