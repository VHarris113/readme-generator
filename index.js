// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your new project/application?',
        },
        {
            type: 'checkbox',
            name: 'description',
            message: 'Can you describe what your app does with words or do you have screenshots?',
            choices: ['Words', 'Screenshots', 'Both'],
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your repo?',
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your deployed site?',
        },
        {
            type: 'input',
            name: 'steps',
            message: 'How do you use it?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What do you use to install it?',
        },
        {
            type: 'list',
            name: 'production',
            message: 'Is production complete for your app?',
            choices: ['Yes', 'No'],
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What coding languages are used in your app?',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        },
        {
            type: 'input',
            name: 'future',
            message: 'Any ideas for future releases?',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'acknowledgements',
            message: 'Any acknowledgements to this endeavor?',
        },
        {
            type: 'input',
            name: 'support',
            message: 'Any support contact information?',
        }
    ])

    // console.log(inquirer);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
