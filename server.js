const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // {TODO: Add your MySQL password}
    password: "Shantae94",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
