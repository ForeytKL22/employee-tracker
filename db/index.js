const connection = require('./connection.js');
// where the queries will be to pull from the databases

// this file will be sql queries


viewAllEmployees = () => {
    return this.connection.promise().query(
        `SELECT employee.first_name,
        employee.last_name,
        role.title,
        department.name AS 'department'
        `
    )};


const viewEmployeesByDepartment = () => {
    return this.connection.promise().query( 
        `SELECT employee.first_name,
        employee.last_name,
        
        `
    )};


const viewEmployeesByManager = () => {
    return this.connection.promise().query(
        ``
    )};


const addEmployee = () => {
    return this.connection.promise().query(
        ``
    )};


const removeEmployee = () => {
    return this.connection.promise().query(
        ``
    )};



