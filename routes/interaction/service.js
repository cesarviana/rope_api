const db = require('@app/sequelize');
const {Service} = require('@app/routes/_generic/service');
module.exports = new Service(db, db.interaction);