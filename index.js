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
            name: "Nothing",
            value: "End",
          },
        ],
      },
    ])
    .then((res) => {
      let choice = res.choice;
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
      // take name from response and call DB function to add that name
      db.addDepartment(response.deptAdd).then(viewDepartments());
    });
}
