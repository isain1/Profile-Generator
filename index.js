const inquirer = require('inquirer');
const fs = require('fs');

 

const menu = {
    type: "list",
    name: "",
    message: "Please select what you would like to do next",
    choices: [
        "Add an engineer",
        "Add an intern",
        "Finish building team"
    ] 
};

const questions = [
    {
       type: "input",
       name: "manager",
       message: "Name of Manager" 
    },
    {
        type: "input",
        name: "manager-id",
        message: "What is the ID number of the manager?" 
     },
     {
        type: "input",
        name: "manager-email",
        message: "What is the manager's email address?" 
     },
     {
        type: "input",
        name: "manager-phone",
        message: "What is the manager's office phone number?" 
     },
     menu
];

const engineerQuestions = [
    {
        type: "input",
        name: "engineer",
        messaage: "Name of engineer"
    },
    {
        type: "input",
        name: "engineer-id",
        message: "What is the ID number of this engineer?" 
     },
     {
        type: "input",
        name: "engineer-email",
        message: "What is the email address of this engineer?" 
     },
     {
        type: "input",
        name: "engineer-github",
        message: "What is this engineers GitHub username?" 
     },
     menu
];

const internQuestions = [
    {
        type: "input",
        name: "intern",
        messaage: "Name of intern"
    },
    {
        type: "input",
        name: "intern-id",
        message: "What is the ID number of this intern?" 
     },
     {
        type: "input",
        name: "intern-email",
        message: "What is the email address of this intern?" 
     },
     {
        type: "input",
        name: "engineer-school",
        message: "What school does this intern attend?" 
     },
     menu
];

