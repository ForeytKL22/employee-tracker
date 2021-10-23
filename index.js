const inquirer = require('inquirer');
const db = require('./db');


const employeeQuestions = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'View all employees by department',
                'View all employees by manager',
                'Add employee',
                'Remove employee',
                'Update employee role',
                'Update employee manager'
            ]
        }
    ])
    .then((data) => {
        const question = data;

        if (question === 'View all employees') {
            viewAllEmployees();
        }
        else if (question === 'View all employees by department') {
            viewEmployeesByDepartment();
        }
        else if (question === 'View all employees by manager') {
            viewEmployeesByManager();
        }
        else if (question === 'Add employee') {
            addEmployee();
        }
        else if (question === 'Remove employee') {
            removeEmployee();
        }
        else if (question === 'Update employee role') {
            updateEmployeeRole();
        }
        else if (question === 'Update employee manager') {
            updateEmployeeManager();
        }
    });
};

employeeQuestions();



const viewAllEmployees = () => {
    db.viewAllEmployees()
    .then(
         //console.table the results?
    )
    .then(
        employeeQuestions()
    )};

// OR ??

// const viewAllEmployees = () => {
//     let sql =         
//     `SELECT employee.first_name,
//     employee.last_name,
//     role.title,
//     department.name AS 'department'
//     `;
//     connection.promise().query(sql, (err, response) => {
//         if (err) throw error;
//         console.table(response);
//     })
//     .then(
//         employeeQuestions()
//     )};





const viewEmployeesByDepartment = () => {
    // inquirer.prompt([
    //     {
    //         type: 'list',
    //         name: 'department',
    //         message: "Which department's employees would you like to view?",
    //         choices: ['Human Resources', 'IT', 'Legal', 'Design', 'Sales', 'Finance']
    //     }
    // ])
    // .then((data) => {
    //     const department = data;
    //     if (department === 'Human Resources') {
    //         // query to display all HR employees
    //     }
    //     else if (department === 'IT') {
    //         // query to display all IT employees
    //     }
    //     else if (department === 'Legal') {
    //         // query to display all legal employees
    //     }
    //     else if (department === 'Design') {
    //         // query to display all design employees
    //     }
    //     else if (department === 'Sales') {
    //         // query to display all sales employees
    //     }
    //     else if (departent === 'Finance') {
    //         // query to display all finance employees
    //     }
    // })
    
    db.viewEmployeesByDepartment()
    .then(
        // console.table the results
    )
    .then(
        employeeQuestions()
    )};


const viewEmployeesByManager = () => {
    db.viewEmployeesByManager()
    .then(
        // console.table the results
    )
};



const addEmployee = () => {
    inquirer.prompt([
        {
           type: 'input',
           name: 'firstName',
           message: "What is the employee's first name?",
           validate: firstNameInput => {
               if(firstNameInput) {
                   return true;
               } else {
                   console.log('First name required');
                   return false;
               }
           }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name",
            validate: lastNameInput => {
                if(lastNameInput) {
                    return true;
                } else {
                    console.log('Last name required');
                    return false;
                }
            }
        },
    ])

    // add first and last name to employee table?
    .then(data => {
        const newEmployee = `INSERT INTO employee (firstName, lastName)`;
    })


    // add department to department table?

    // add role/title and salary to role table?
}






