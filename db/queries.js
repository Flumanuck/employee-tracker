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
  addDepartment: (department) => {
    return connection
      .promise()
      .query(`INSERT INTO department (dept_name) VALUES ("${department}")`);
  },
};

module.exports = queries;
