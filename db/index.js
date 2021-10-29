const connection = require('./connection.js');

class EmployeeData {
    constructor(connection) {
        this.connection = connection
    }

    viewAllEmployeesQuery() {
        return this.connection.promise().query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, 
            role.salary, department.name AS department, CONCAT(manager.first_name, " ", manager.last_name) AS manager
            FROM employee
            LEFT JOIN role ON employee.role_id = role.id
            LEFT JOIN department ON role.department_id = department.id
            LEFT JOIN employee manager ON manager.id = employee.manager_id`
        )};

    

    viewAllDepartmetsQuery() {
        return this.connection.promise().query( 
            `SELECT department.id, department.name AS department
            FROM department`
        )};


    // STILL NEED TO GET DEPARTMENT TITLE JOINED AND SHOWING IN THE DEPARTMENT_ID COLUMN
    viewAllRolesQuery() {
        return this.connection.promise().query(
            `SELECT role.id, role.title, role.salary, role.department_id
            FROM role
            LEFT JOIN department ON role.department_id = department.name`
        )};


    addEmployeeQuery(employee) {
        return this.connection.promise().query(

            'INSERT INTO employee SET ?', employee
        )}
};


    module.exports = new EmployeeData(connection);


 


