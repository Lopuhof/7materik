const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
const path = require('path');

dotenv.config({
    path: './config/.env'
});

const app = express();

const dataBase = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    PORT: Number(process.env.DATABASE_PORT)
});

console.log(process.env.PORT);
/* dataBase.query('SELECT * FROM users', (error, results) => {
    if (error) throw error;
    console.log(results);
    dataBase.end(); 
}); */

app.listen(dataBase.port, () => {
    console.log(`App has been started on ${dataBase.PORT}`);
});