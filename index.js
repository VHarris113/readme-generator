const markdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (answers) => `
## Title:${answers.title}

##Table of Contents
- [Description](#description)
- [Repository](#repository)
- [Website](#website)
- [Usage](#usage)
- [Installation](#installation)
- [Production](#production)
- [Languages](#language)
- [License](#license)
- [Releases](#release)
- [Support](#support)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

## Description
${answers.description}
![answers.title](${answers.picture});

## Repository
[Repo](${answers.repo})

## Website
[Website](${answers.link})

## Usage
${answers.steps}

## Installation
${answers.installation}

## Production
${answers.production}

## Languages
${answers.languages}

## License
${markdown.renderLicenseBadge(answers.license)}

## Releases
${answers.future}

## Support
${answers.support}

## Contributors
${answers.contributors}

## Acknowledgements
${answers.acknowledgements}
`;

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
            name: 'picture',
            message: 'Please add a link to a picture or video of your app in use.'
        },
        {
            type: 'input',
            name: 'repo',
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
            type: 'input',
            name: 'production',
            message: 'Please write out of production has concluded or an ETA for the finished product.',
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
            message: 'Choose the correct license for this app:',
            choices: ['ISC', 'MIT', 'Mozilla', 'None'],
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
            message: 'Please list all support information for the app.',
        }
    ])


    .then((answers) => {
        const readmePageContent = generateReadme(answers);
        fs.writeFile('README.md', readmePageContent, err => 
        err ? console.log(err) : console.log("Congratulations! Your README is now complete!")
    )});