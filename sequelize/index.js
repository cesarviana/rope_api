const Sequelize = require('sequelize')
const DB_URL = process.env.DB_URL
const sequelize = new Sequelize(DB_URL)

const { createRelations } = require('./relations')
sequelize.Sequelize = Sequelize

const models = [
    require('./models/user')
]

models.forEach(async (model) => await model(sequelize));

createRelations(sequelize)

module.exports = sequelize