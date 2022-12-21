//Installing node modules and importing employee class constructors
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'created-team.html');
const render = require('./src/generate-template');

const teamArr =[];

 

const menu = {
    type: "list",
    name: "menu",
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
       name: "managerName",
       message: "Name of Manager" 
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the ID number of the manager?" 
     },
     {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?" 
     },
     {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?" 
     },
     menu
];

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        messaage: "Name of engineer"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the ID number of this engineer?" 
     },
     {
        type: "input",
        name: "engineerEmail",
        message: "What is the email address of this engineer?" 
     },
     {
        type: "input",
        name: "engineerGithub",
        message: "What is this engineers GitHub username?" 
     },
     menu
];

const internQuestions = [
    {
        type: "input",
        name: "internName",
        messaage: "Name of intern"
    },
    {
        type: "input",
        name: "internId",
        message: "What is the ID number of this intern?" 
     },
     {
        type: "input",
        name: "internEmail",
        message: "What is the email address of this intern?" 
     },
     {
        type: "input",
        name: "internSchool",
        message: "What school does this intern attend?" 
     },
     menu
];

const addManager = () => {
   return inquirer.prompt(questions)
      .then((response) => {
         // const { name, id, email, officeNumber } = response;
         const manager = new Manager (response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
         teamArr.push(manager);
      });
};

const addEngineer = () => {
   return inquirer.prompt(engineerQuestions)
      .then((response) => {
         const engineer = new Engineer (response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
         teamArr.push(engineer);
         promptMenu();
      });
}

const addIntern = () => {
   return inquirer.prompt(internQuestions)
      .then((response) => {
         const intern = new Intern (response.internName, response.internId, response.internEmail, response.internSchool);
         teamArr.push(intern);
         promptMenu();
      });
}

const promptMenu = () => {
   return inquirer.prompt(menu)
      .then((response) => {
         if(response.menu == "Add an engineer") {
            return addEngineer();
         } else if (response.menu == "Add an intern") {
            return addIntern();
         } else if (response.menu == "Finish building team") {
            return;
         };
      });
};

async function addTeam() {
   console.log(`Welcome to the team profile generator`);
   await addManager();
   promptMenu();

   if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
   }
    fs.writeFileSync(distPath, render(teamArr), 'utf-8');
};

addTeam();
