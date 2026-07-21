const Sequelize = require('sequelize');
const db = require('./dataBase/index.cjs');
const Users = db.users;

function t01() {
    Users.findAll().then(result => {
        console.log(result);
    });
};

t01();

