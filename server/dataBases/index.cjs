const Sequelize = require('sequelize');

const sequelize = new Sequelize('7materik', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false
});

const Users = require('./Users.cjs')(sequelize);

module.exports = {
    sequelize: sequelize,
    users: Users
};

