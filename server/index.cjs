const Sequelize = require('sequelize');
const dataBase = require('./dataBases/index.cjs');
const Users = dataBase.users;

function t01() {
    Users.findAll().then(result => {
        /* console.log(result); */
        result.forEach(item => console.log(item.password));
    });
};

t01();