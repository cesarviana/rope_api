const DataTypes = require('sequelize').DataTypes

module.exports = async (sequelize) => 
{
    const model = sequelize.define('user', {
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        }
    })

    await model.sync()
}