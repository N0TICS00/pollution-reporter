const { Sequelize } = require("sequelize")
//SERVER
export const sequelize = new Sequelize('pollution-reporter' , 'root' , '', {
    host: 'localhost',
    dialect: 'mysql'
})
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

