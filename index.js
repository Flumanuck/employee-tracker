const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db/queries.js");

function userInput() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "View All Departments",
            value: "View_Departments",
          },
          {
            name: "View All Roles",
            value: "View_Roles",
          },
          {
            name: "View All Employees",
            value: "View_Employees",
          },
          {
            name: "Add A Department",
            value: "Add_Department",
          },
          {
            name: "Add A Role",
            value: "Add_Role",
          },
          {
            name: "Add An Employee",
            value: "Add_Employee",
          },
          {
            name: "Update An Employee",
            value: "Update_Employee",
          },
          {
            name: "Delete An Employee's Data",
            value: "Delete_Employee",
          },
          {
            name: "Delete A Role",
            value: "Delete_Role",
          },
          {
            name: "Delete A Department",
            value: "Delete_Department",
          },
          {
            name: "Nothing",
            value: "End",
          },
        ],
      },
    ])
    .then((res) => {
      let { choice } = res;
      switch (choice) {
        case "View_Departments":
          viewDepartments();
          break;
        case "View_Roles":
          viewRoles();
          break;
        case "View_Employees":
          viewEmployees();
          break;
        case "Add_Department":
          addDepartment();
          break;
        case "Add_Role":
          addRole();
          break;
        case "Add_Employee":
          addEmployee();
          break;
        case "Update_Employee":
          updateEmployee();
          break;
        case "Delete_Employee":
          deleteEmployee();
          break;
        case "Delete_Role":
          deleteRole();
          break;
        case "Delete_Department":
          deleteDepartment();
          break;
        case "End":
          endFunction();
          break;
      }
    });
}
userInput();

function viewDepartments() {
  db.findAllDepartment().then(([dept]) => {
    console.table(dept);
    userInput();
  });
}

function viewRoles() {
  db.findAllRole().then(([role]) => {
    console.table(role);
    userInput();
  });
}

function viewEmployees() {
  db.findAllEmployee().then(([employee]) => {
    console.table(employee);
    userInput();
  });
}
function endFunction() {
  console.log("Thank you!");
  process.exit();
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "deptAdd",
        message: "What department do you want to add?",
      },
    ])
    .then((response) => {
      db.addDepartment(response.deptAdd).then(viewDepartments());
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleAdd",
        message: "What role do you want to add?",
      },
      {
        type: "input",
        name: "salaryAdd",
        message: "What is this role's Salary?",
      },
      {
        type: "input",
        name: "deptIdAdd",
        message: "What is the role's department ID?",
      },
    ])
    .then((response) => {
      const { roleAdd, salaryAdd, deptIdAdd } = response;
      db.addRole(roleAdd, salaryAdd, deptIdAdd).then(viewRoles());
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstNameAdd",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastNameAdd",
        message: "What is this employee's last name?",
      },
      {
        type: "input",
        name: "roleIdAdd",
        message: "What is the employee's role ID?",
      },
      {
        type: "input",
        name: "managerIdAdd",
        message: "What is the employee's manager ID?",
      },
    ])
    .then((response) => {
      const { firstNameAdd, lastNameAdd, roleIdAdd, managerIdAdd } = response;
      db.addEmployee(firstNameAdd, lastNameAdd, roleIdAdd, managerIdAdd).then(
        viewEmployees()
      );
    });
}

function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "idChoice",
        message: "What is the id of the employee you want to update?",
      },
      {
        type: "input",
        name: "firstNameEdit",
        message: "What is the employee's new first name (if applicable)?",
      },
      {
        type: "input",
        name: "lastNameEdit",
        message: "What is the employee's new last name (if applicable)?",
      },
      {
        type: "input",
        name: "roleIdEdit",
        message: "What is the employee's new role ID (if applicable)?",
      },
      {
        type: "input",
        name: "managerIdEdit",
        message: "What is the employee's new manager ID (if applicable)?",
      },
    ])
    .then((response) => {
      const {
        idChoice,
        firstNameEdit,
        lastNameEdit,
        roleIdEdit,
        managerIdEdit,
      } = response;
      db.editEmployee(
        idChoice,
        firstNameEdit,
        lastNameEdit,
        roleIdEdit,
        managerIdEdit
      ).then(viewEmployees());
    });
}

function deleteEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "idChoice",
        message: "What is the id of the employee you want to delete?",
      },
    ])
    .then((response) => {
      const { idChoice } = response;
      db.deleteEmployee(idChoice).then(viewEmployees());
    });
}

function deleteRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "idChoice",
        message: "What is the id of the role you want to delete?",
      },
    ])
    .then((response) => {
      const { idChoice } = response;
      db.deleteRole(idChoice).then(viewRoles());
    });
}

function deleteDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "idChoice",
        message: "What is the id of the department you want to delete?",
      },
    ])
    .then((response) => {
      const { idChoice } = response;
      db.deleteDepartment(idChoice).then(viewDepartments());
    });
}
