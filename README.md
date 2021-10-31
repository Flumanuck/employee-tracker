# Employee Tracker

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Video-Example](#video-example)

## Description

This is a command line application that allows the users to track departments, roles, and employees. It also allows the user to delete departments, roles, and employee data as well as edit employee data. This is all done using inquirer

## Installation
-Make sure you have mySQL and node.js installed.
-Run the database by typing "mysql -u root -p" and typing in your mySQL password when prompted.
-Run the schema file as well as the seed by typing "source schema.sql" and "source seeds.sql" respectively. 
-From the command line, run "npm i" to install the needed dependencies.

## Usage

- Run "node index.js"
- Select the action you want to take from the given choices.
- When updating and/or deleting data, answer any given questions (Be sure to keep track of ids so that you don't edit/delete the wrong thing.)
- When you are finished, select the "Nothing" option from the main menu to exit the application

## Screenshot

![screenshot of application](https://github.com/Flumanuck/employee-tracker/blob/main/Screenshot.PNG?raw=true)

## Video-Example

https://drive.google.com/file/d/1iLdPQqXuuTj_5xhKUtaml1DKdEc7Unw2/view?usp=sharing
