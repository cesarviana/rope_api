const {Model, Sequelize} = require('sequelize');

class Service {
    /**
     * @param db {Sequelize}
     * @param model {Model}
     */
    constructor(db, model) {
        this.db = db;
        this.model = model;
    }

    async save(obj) {
        return this.model.create(obj);
    }
}

module.exports = {
    Service
};