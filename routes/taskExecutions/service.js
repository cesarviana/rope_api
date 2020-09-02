const db = require('@app/sequelize');
const { Service } = require('@app/routes/_generic/service');

class TaskExecutionService extends Service {
    async findAllByTask(task) {
        return this.model.findAll({
            where: {
                taskId: task.id
            }
        })
    }
    async findAllByUser(user) {
        return this.model.findAll({
            where: {
                userId: user.id
            }
        })
    }
}

module.exports = new TaskExecutionService(db, db.execution);
