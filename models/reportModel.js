const { DataTypes } = require("sequelize/dist")
const sequelize = require("../server")
const User = sequelize.define('City', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    cityName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = User