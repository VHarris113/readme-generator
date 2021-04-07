// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your new project/application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Can you describe what your app does?',
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
            type: 'list',
            name: 'license',
            message: 'Do you have a license for this app?',
            choices: ['Yes', 'No'],
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
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Here is your completed ReadMe!")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();