const connection = require("./connection");

const queries = {
  findAllDepartment: () => {
    return connection
      .promise()
      .query("SELECT department.id, department.dept_name FROM department ");
  },

  findAllRole: () => {
    return connection.promise().query("SELECT * FROM role");
  },

  findAllEmployee: () => {
    return connection
      .promise()
      .query("SELECT first_name, last_name, role_id, manager_id FROM employee");
  },

  addDepartment: (department) => {
    return connection
      .promise()
      .query(`INSERT INTO department (dept_name) VALUES ("${department}")`);
  },

  addRole: (title, salary, department_id) => {
    return connection
      .promise()
      .query(
        `INSERT INTO role (title, salary, department_id) VALUES ("${title}", ${salary}, ${department_id})`
      );
  },

  addEmployee: (firstName, lastName, roleId, managerId) => {
    return connection
      .promise()
      .query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", ${roleId}, ${managerId})`
      );
  },

  editEmployee: (id, firstName, lastName, roleId, managerId) => {
    return connection
      .promise()
      .query(
        `UPDATE employee SET first_name = "${firstName}", last_name = "${lastName}", role_id = ${roleId}, manager_id = ${managerId} WHERE id = ${id}`
      );
  },

  deleteEmployee: (id) => {
    return connection.promise().query(`DELETE FROM employee WHERE id = ${id}`);
  },
};

module.exports = queries;
