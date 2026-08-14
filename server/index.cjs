/* const Sequelize = require('sequelize');
const dataBase = require('./dataBases/index.cjs');
const Users = dataBase.users;

function t01() {
    Users.findAll().then(result => {
        result.forEach(item => console.log(item.password));
    });
};

t01(); */

const express = require('express');
const path =require('path');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
});

const app = express();

const PORT = 5555;

const dataBase = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: '7materik',
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.set('view engine', 'hbs');

dataBase.connect( (err) => {
    if (err === true) {
        console.log(err);
    } else {
        console.log('MYSQL connected...');
    };
});

app.use('/', require('./routes/pages.cjs'));
app.use('/auth', require('./routes/auth.cjs'));

app.listen(PORT, () => {
    console.log('server started at ' + PORT + ' port')
});