const db = require('@app/sequelize');
const {Service} = require('@app/routes/_generic/service');
class InteractionService extends Service {
    async findAllByExecution(execution) {
        return this.model.findAll({
            where: {
                executionId: execution.id
            }
        })
    }
}
module.exports = new InteractionService(db, db.interaction);