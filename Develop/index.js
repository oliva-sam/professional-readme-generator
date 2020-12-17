// npm inquirer used for CLI
const inquirer = require("inquirer");

// linking to the js file with the layout the of README 
const utils = require('./utils/generateMarkdown');

// needed to talk to file system 
const fs = require('fs');

// array of questions for user
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "What kind of license should you have?",
    "What command should be run to install dependencies?",
    "What command should be run to initialize tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// function to initialize program
function init() {
    inquirer
    .prompt([
        {
            name: "username",
            type: "input",
            message: questions[0]
        },
        {
            name: "email",
            type: "input", 
            message: questions[1]
        },
        {
            name: "project_name",
            type: "input", 
            message: questions[2]
        }, 
        {
            name: "license",
            type: "list", 
            message: questions[3],
            choices: ["MIT", "Apache 3.0", "BSD 3", "GDL 3.0", "None"],
            default: "None"
        }, 
        {
            name: "dependencies_command",
            type: "input", 
            message: questions[4],
            default: "npm i"
        },
        {
            name: "test_command",
            type: "input", 
            message: questions[5],
            default: "manual test"
        },
        {
            name: "about_repo",
            type: "input", 
            message: questions[6]
        },
        {
            name: "contribute_repo",
            type: "input", 
            message: questions[7],
            default: "Samantha Oliva"
        },
    ])
    // Writing to readME
    .then((answer) => {
        let readMetext = utils(answer);
        fs.writeFileSync("README.md", readMetext, function(err) {
            if (err) throw err
        });
        console.log("File Generated")
    });
}

// function call to initialize program
init();
