INSERT INTO department (name)
VALUES
    ('Human Resources'),
    ('IT'),
    ('Legal'),
    ('Design'),
    ('Sales'),
    ('Finance');


INSERT INTO role (title, salary, department_id)
VALUES 
    ('Manager', '100000.00', '1'),
    ('Assistant Manager', '85000.00', '1'),
    ('Manager', '100000.00', '2'),
    ('Computer Technician', '70000.00', '2'),
    ('Web Developer', '80000.00', '2'),
    ('Clerk', '65000.00', '3'),
    ('Research Attorney', '70000.00', '3'),
    ('Law Clerk', '63000.00', '3'),
    ('Intern', '25000.00', '3'),
    ('Manager', '100000.00', '4'),
    ('Graphic Design Artist', '55000.00', '4'),
    ('Manager', '100000.00', '5'),
    ('Sales Specialist', '70000.00', '5'),
    ('Customer Service Rep', '45000.00', '5'),
    ('Manager', '100000.00', '6'),
    ('Accountant', '68000.00', '6'),
    ('Auditor', '50000.00', '6');


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Frazier', '1', NULL),
    ('Jack', 'London', '4', '3'),
    ('Robert', 'Bruce', '2', '1'),
    ('Peter', 'Greenerg', '5', '3'),
    ('Derek', 'Jarman', '6', NULL),
    ('Antionette', 'Powell', '7', NULL),
    ('Sandy', 'Williams', '11', '10'),
    ('Sissy', 'Coalpits', '3', NULL),
    ('Samuel', 'Johnson', '10', NULL),
    ('Tony', 'Duvert', '8', NULL),
    ('Dennis', 'Cooper', '11', '10'),
    ('Emily', 'Zola', '15', NULL),
    ('Tully', 'Johnson', '16', '15'),
    ('Crane', 'Hart', '17', '15'),
    ('Arnold', 'Bennett', '16', '15'),
    ('William', 'Collins', '9', NULL);



    
