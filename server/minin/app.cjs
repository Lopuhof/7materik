const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
const path = require('path');

dotenv.config({
    path: './config/.env'
});

const app = express();

const PORT = Number(process.env.DATABASE_PORT);

const dataBase = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

app.listen(PORT, () => {
    console.log(`App has been started on ${PORT}`);
});