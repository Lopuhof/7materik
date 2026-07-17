import Sequelize from "sequelize";
import dataBase from './dataBase';

function t01() {
    dataBase.Users.findAll().then(result => {
        console.log(result);
    });
};

t01();
