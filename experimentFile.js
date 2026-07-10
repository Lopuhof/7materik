import mysql from 'mysql2';
import CONFIG from './config.js';

/* const { mysql } = mysqlModule; */

function t01() {
    const connection = mysql.createConnection(CONFIG);
    connection.connect();

    let query = 'SELECT * FROM users';

    connection.query(query, function(error, result) {
       console.log(result); 
    });
    connection.end();
}

t01();