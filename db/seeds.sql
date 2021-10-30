INSERT INTO department (dept_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 19000, 1),
       ("Salesperson", 10500, 1),
       ("Lead Engineer", 20000, 2),      
       ("Financial Consultant", 30000, 3),
       ("Head of Legal Team", 40000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 1),
       ("Ed", "Fish", 1, 1),
       ("Peter", "Crowler", 2, 2),      
       ("Jaiden", "Yuuki", 3, 2),
       ("Yugi", "Mutou", 4, 3);
