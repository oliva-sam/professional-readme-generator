const inquirer = require("inquirer");
const utils = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [
    "0. What is your GitHub username?",
    "1. What is your email address?",
    "2. What is your project's name?",
    "3. What kind of license should you have?",
    "4. What command should be run to install dependencies?",
    "5. What command should be run to initialize tests?",
    "6. What does the user need to know about using the repo?",
    "7. What does the user need to know about contributing to the repo?"
];

// function to write README file
function writeToFile(fileName, data) {
}

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
    .then((answer) => {
        let readMetext = utils(answer);
        console.log(readMetext);
        fs.writeFileSync("README.md", readMetext, function(err) {
            if (err) throw err
            console.log("File Generated")
        });
        console.log("generating README...")
    });
}

// function call to initialize program
init();
