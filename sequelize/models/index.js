'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const { v4: uuid } = require('uuid');

let sequelize;

config.define = {
  hooks: {
    beforeCreate(obj) {
      if (!obj.id) obj.id = uuid()
    },
    beforeBulkCreate(instances) {
      instances.filter(instance => !instance.id).forEach(instance => instance.id = uuid())
    }
  }
};

if (config.useEnvVariable) {
  sequelize = new Sequelize(process.env[config.useEnvVariable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.transaction = sequelize.transaction;

module.exports = db;
