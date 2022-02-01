const { DataTypes } = require("sequelize")
const sequelize = require("../server")
const City = sequelize.define('city', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    cityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})
module.exports = City