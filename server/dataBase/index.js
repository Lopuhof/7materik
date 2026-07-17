import Sequelize from 'sequelize';
import Users from './Users.js';

const sequelize = new Sequelize('users', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false
});

module.exports = {
    sequelize: sequelize,
    users: Users
};

