import mysql from 'mysql2';
import CONFIG from './config.js';

function t01() {
    const connection = mysql.createConnection(CONFIG);
    connection.connect();

    let query = 'SELECT * FROM users';

    connection.query(query, function(error, result) {
        if (error) throw error;
       console.log(result.length); 
    });
    connection.end();
}

t01();