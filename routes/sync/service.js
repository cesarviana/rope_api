const db = require('@app/sequelize');
const { Service } = require('@app/routes/_generic/service');

class SyncService extends Service {
    async save(localData) {
        const transaction = await this.db.sequelize.transaction();
        const users = await this.db.user.bulkCreate(localData.users, {transaction});
        const tasks = await this.db.task.bulkCreate(localData.tasks, {transaction});
        const executions = await this.db.execution.bulkCreate(localData.executions, {transaction});
        const interactions = await this.db.interaction.bulkCreate(localData.interactions, {transaction});

        return {
            users, tasks, executions, interactions
        }
    }
}

module.exports = new SyncService(db);