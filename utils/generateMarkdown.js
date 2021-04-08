// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (answers.license) {
    const isc = {
      badge: 'License: ISC',
    }
  } else if (answers.license) {
    const mozilla = {
      badge: "License: MPL 2.0",
      link: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    }
  } else if (answers.license) {
    const mit = {
      badge: 'License: MIT',
      link: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    }
  } else (answers.license)
    const none = "",
  
  return license
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
};

module.exports = generateMarkdown;