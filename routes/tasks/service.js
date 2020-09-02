const db = require('@app/sequelize');
const { Service } = require('@app/routes/_generic/service');

class TaskService extends Service {
    async save(task) {
        task.mat = JSON.stringify(task.mat);
        return super.save(task);
    }
}

module.exports = new TaskService(db, db.task);