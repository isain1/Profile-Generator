//Installing node modules and importing employee class constructors
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "created-team.html");
const render = require("./src/generate-template");

const teamArr = [];

// const menu = {
//   type: "list",
//   name: "menu",
//   message: "Please select what you would like to do next",
//   choices: ["Add an engineer", "Add an intern", "Finish building team"],
// };

// const questions = [
//   {
//     type: "input",
//     name: "managerName",
//     message: "Name of Manager",
//   },
//   {
//     type: "input",
//     name: "managerId",
//     message: "What is the ID number of the manager?",
//   },
//   {
//     type: "input",
//     name: "managerEmail",
//     message: "What is the manager's email address?",
//   },
//   {
//     type: "input",
//     name: "managerOfficeNumber",
//     message: "What is the manager's office number?",
//   },
// ];

// const engineerQuestions = [
//   {
//     type: "input",
//     name: "engineerName",
//     messaage: "Name of engineer",
//   },
//   {
//     type: "input",
//     name: "engineerId",
//     message: "What is the ID number of this engineer?",
//   },
//   {
//     type: "input",
//     name: "engineerEmail",
//     message: "What is the email address of this engineer?",
//   },
//   {
//     type: "input",
//     name: "engineerGithub",
//     message: "What is this engineers GitHub username?",
//   },
// ];

// const internQuestions = [
//   {
//     type: "input",
//     name: "internName",
//     messaage: "Name of intern",
//   },
//   {
//     type: "input",
//     name: "internId",
//     message: "What is the ID number of this intern?",
//   },
//   {
//     type: "input",
//     name: "internEmail",
//     message: "What is the email address of this intern?",
//   },
//   {
//     type: "input",
//     name: "internSchool",
//     message: "What school does this intern attend?",
//   },
// ];

// const addManager = () => {
//   return inquirer.prompt(questions).then((response) => {
//     // const { name, id, email, officeNumber } = response;
//     const manager = new Manager(
//       response.managerName,
//       response.managerId,
//       response.managerEmail,
//       response.managerOfficeNumber
//     );
//     teamArr.push(manager);
//   });
// };

// const addEngineer = () => {
//   return inquirer.prompt(engineerQuestions).then((response) => {
//     const engineer = new Engineer(
//       response.engineerName,
//       response.engineerId,
//       response.engineerEmail,
//       response.engineerGithub
//     );
//     teamArr.push(engineer);
//     promptMenu();
//   });
// };

// const addIntern = () => {
//   return inquirer.prompt(internQuestions).then((response) => {
//     const intern = new Intern(
//       response.internName,
//       response.internId,
//       response.internEmail,
//       response.internSchool
//     );
//     teamArr.push(intern);
//     promptMenu();
//   });
// };

// const promptMenu = () => {
//   return inquirer.prompt(menu).then((response) => {
//     if (response.menu == "Add an engineer") {
//       return addEngineer();
//     } else if (response.menu == "Add an intern") {
//       return addIntern();
//     } else if (response.menu == "Finish building team") {
//       return;
//     }
//   });
// };

// const buildTeam = () => {
//   if (!fs.existsSync(DIST_DIR)) {
//     fs.mkdirSync(DIST_DIR);
//   }
//   fs.writeFileSync(distPath, render(teamArr), "utf-8");
// };

// async function addTeam() {
//   console.log(`Welcome to the team profile generator`);
//   await addManager();
//   promptMenu();
//   buildTeam();
// }

// addTeam();

// function createTeam() {  
//   function promptMenu() {
//     inquirer
//       .prompt([
//         {
//           type: "list",
//           message: "Which employee would you like to select?",
//           name: "addEmployee",
//           choices: ["Manager", "Engineer", "Intern", "Finish building team"],
//         },
//       ])
//       .then(function (answer) {
//         console.log(answer);
//         if (answer.value == 'Manager') {
//           addManager();
//         } else if (answer.value == 'Engineer') {
//           addEngineer();
//         } else if (answer.value == 'Intern') {
//           addIntern();
//         } else if (answer.value == 'Finish building team') {
//           generateHtml(); 
//         }
//       });
//   }

//   function generateHtml() {
//     console.log("Your team has been generated");
//     fs.writeFileSync(distPath, render(teamArr), "utf-8");
//   }

//   function addManager() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "managerName",
//         message: "Name of Manager",
//       },
//       {
//         type: "input",
//         name: "managerId",
//         message: "What is the ID number of the manager?",
//       },
//       {
//         type: "input",
//         name: "managerEmail",
//         message: "What is the manager's email address?",
//       },
//       {
//         type: "input",
//         name: "managerOfficeNumber",
//         message: "What is the manager's office number?",
//       },
//     ]).then((response) => {
//       const manager = new Manager(
//         response.managerName,
//         response.managerId,
//         response.managerEmail,
//         response.managerOfficeNumber
//       );
//       teamArr.push(manager);
//       promptMenu();
//     });
//   };

//   function addEngineer() {
//     inquirer.prompt(
//       [
//         {
//           type: "input",
//           name: "engineerName",
//           messaage: "Name of engineer",
//         },
//         {
//           type: "input",
//           name: "engineerId",
//           message: "What is the ID number of this engineer?",
//         },
//         {
//           type: "input",
//           name: "engineerEmail",
//           message: "What is the email address of this engineer?",
//         },
//         {
//           type: "input",
//           name: "engineerGithub",
//           message: "What is this engineers GitHub username?",
//         },
//       ]
//     ).then((response) => {
//       const engineer = new Engineer(
//         response.engineerName,
//         response.engineerId,
//         response.engineerEmail,
//         response.engineerGithub
//       );
//       teamArr.push(engineer);
//       promptMenu();
//     });
//   };

//   function addIntern() {
//     inquirer.prompt(
//       [
//         {
//           type: "input",
//           name: "internName",
//           messaage: "Name of intern",
//         },
//         {
//           type: "input",
//           name: "internId",
//           message: "What is the ID number of this intern?",
//         },
//         {
//           type: "input",
//           name: "internEmail",
//           message: "What is the email address of this intern?",
//         },
//         {
//           type: "input",
//           name: "internSchool",
//           message: "What school does this intern attend?",
//         },
//       ]
//     ).then((response => {
//       const intern = new Intern(
//         response.internName,
//         response.internId,
//         response.internEmail,
//         response.internSchool
//       );
//       teamArr.push(intern);
//       promptMenu();
//     }));
//   };

//   promptMenu();
// };

// createTeam();


function createTeam() {  
  function addManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Name of Manager",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the ID number of the manager?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
      },
    ]).then((response) => {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.managerOfficeNumber
      );
      teamArr.push(manager);
      promptMenu();
    });
  };

  function promptMenu() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which employee would you like to select?",
          name: "addEmployee",
          choices: ["Engineer", "Intern", "Finish building team"],
        },
      ])
      .then(function (userInput) {
        console.log(userInput);
        switch (userInput.addEmployee) {
          case "Manager":
            addManager();
            break;

          case "Engineer":
            addEngineer();
            break;

          case "Intern":
            addIntern();
            break;

          default:
            generateHtml();
            break;
        }
      });
  }

  function generateHtml() {
    console.log("Your team has been generated");
    fs.writeFileSync(distPath, render(teamArr), "utf-8");
  }

  

  function addEngineer() {
    inquirer.prompt(
      [
        {
          type: "input",
          name: "engineerName",
          messaage: "Name of engineer",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the ID number of this engineer?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the email address of this engineer?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is this engineers GitHub username?",
        },
      ]
    ).then((response) => {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerId,
        response.engineerEmail,
        response.engineerGithub
      );
      teamArr.push(engineer);
      promptMenu();
    });
  };

  function addIntern() {
    inquirer.prompt(
      [
        {
          type: "input",
          name: "internName",
          messaage: "Name of intern",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the ID number of this intern?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the email address of this intern?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does this intern attend?",
        },
      ]
    ).then((response => {
      const intern = new Intern(
        response.internName,
        response.internId,
        response.internEmail,
        response.internSchool
      );
      teamArr.push(intern);
      promptMenu();
    }));
  };

  addManager();
};

createTeam();