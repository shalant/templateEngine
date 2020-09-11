const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
var inquirer = require('inquirer');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//employee - name, id, email

//Manager - office
//Engineer - github
//intern - school

const employeeQ = [
    {
    type: "input",
    name: 'name',
    message: 'What is your name?',
    default: 'Enter name'
    },
    {
    type: "input",
    name: 'id',
    message: 'What is your ID number??',
    default: 'Enter ID number'
    },
    {
    type: "input",
    name: 'email',
    message: 'What is your e-mail?',
    default: 'Enter e-mail address'
    },
    {
        type: "list",
        name: "role",
        message: "what is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

const managerQ = [
   
    {
    type: "input",
    name: 'officeNum',
    message: 'What is your office number?',
    default: 'Enter e-mail address'
    }
]

const engineerQ = [
    {
    type: "input",
    name: 'github',
    message: 'What is your github repo?',
    default: 'Enter Github repo'
    }
]

const internQ = [
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
    }
]

inquirer.prompt(employeeQ)
.then(answers => {
    if(answers.role === "Manager") {
        //ask the manager question
        //put this in a function
        inquirer.prompt(managerQ).then(manager_answer => employees.push);
    }
    if(answers.role === "Engineer") {
        inquirer.prompt(engineerQ).then(engineer_answer => employees.push);
    }
    if(answers.role === "Intern") {
        inquirer.prompt(internQ).then(intern_answer => employees.push);
    }
})


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

  const answers = render(await inquirer.prompt(employeeQ, internQ, managerQ, engineerQ));
  outputPath('main.html', answers);
  
//is this redundant?
//  .then(answers => {
    // Use user feedback for... whatever!!
    
    // .catch(error => {
    //     if (error.isTtyError) {
    //         // Prompt couldn't be rendered in the current environment
    //     } else {
    //         // Something else when wrong
    //     }
    // }



    
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
