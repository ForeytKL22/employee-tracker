const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Tamahome064',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database')
);

module.exports = db;