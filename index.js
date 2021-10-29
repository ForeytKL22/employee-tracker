const inquirer = require('inquirer');
const db = require('./db');



const employeeQuestions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'View all departments',
                'View all roles',
                'Add employee',
                'Add department',
                'Add role',
                'Update employee role'
            ]
        }
    ])
        .then((data) => {
            const question = data.choices;
            if (question === 'View all employees') {
                viewAllEmployees();
            }
            else if (question === 'View all departments') {
                viewAllDepartments();
            }
            else if (question === 'View all roles') {
                viewAllRoles();
            }
            else if (question === 'Add employee') {
                addEmployee();
            }
            else if (question === 'Add deparment') {
                addDepartment();
            }
            else if (question === 'Add role') {
                addRole();
            }
            else if (question === 'Update employee role') {
                updateEmployeeRole();
            }
        });
};

employeeQuestions();


const viewAllEmployees = () => {
    db.viewAllEmployeesQuery()
        .then((response) => {
            console.table(response[0])
        })
        .then(() => {
            employeeQuestions()
        })
};


const viewAllDepartments = () => {
    db.viewAllDepartmetsQuery()
        .then((response) => {
            console.table(response[0])
        })
        .then(() => {
            employeeQuestions()
        })
};


const viewAllRoles = () => {
    db.viewAllRolesQuery()
        .then((response) => {
            console.table(response[0])
        })
        .then(() => {
            employeeQuestions()
        })
};


const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the employee's first name?",
            validate: firstNameInput => {
                if (firstNameInput) {
                    return true;
                } else {
                    console.log('First name required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the employee's last name",
            validate: lastNameInput => {
                if (lastNameInput) {
                    return true;
                } else {
                    console.log('Last name required');
                    return false;
                }
            }
        }
    ])

        .then((response) => {
            let firstName = response.first_name;
            let lastName = response.last_name;
            db.viewAllRolesQuery()
                .then(([rows]) => {
                    let roles = rows;
                    const roleChoices = roles.map(({ id, title }) => ({
                        name: title,
                        value: id
                        })
                    );

                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'role_id',
                            message: "What is the employee's role?",
                            choices: roleChoices
                        },
                        {
                            type: 'list',
                            name: 'manager_id',
                            message: "Who is this employee's manager?",
                            choices: ['1', '2', '3']   //managerChoices this will eventually bring in all the managers to choose from
                        }
                    ])

                        .then((data) => {
                            let roleId = data.role_id;

                            // db.query to find the managers in the employee table
                            // another .then here to ask the manager question 


                            let managerId = data.manager_id;
                            console.log(data);
                            let employee = {
                                first_name: firstName,
                                last_name: lastName,
                                role_id: roleId,
                                manager_id: managerId
                            }
                            db.addEmployeeQuery(employee)
                                .then((response) => {
                                    console.table(response)
                                })
                                .then(() => {
                                    console.log("employee added successfully!")
                                    employeeQuestions()
                                });
                        });
                })
        })
}







