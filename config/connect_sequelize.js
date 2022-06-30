const Sequelize  = require('sequelize');

const sequelize = new Sequelize('meeting_room', 'root', 'v3nu55upp1y', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    logging: true,
})


const connection = {};
connection.sequeliz= sequelize;
connection.Sequelize = Sequelize;

module.exports = connection;