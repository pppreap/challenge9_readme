// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.Title}
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description

${responses.Description}

## Installation
${responses.Installation}

## Usage
${responses.Usage}


## Contributions/Licenses
${responses.Contributions}

## Licenses
![badge](https://img.shields.io/badge/license-${responses.license}-brightgreen)
<br />
This application is covered by the ${responses.license} license. 

## Credits
${responses.Credits}

## Tests
${responses.Tests}


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contriubutions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  

  ## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

## Questions
Github Username: ${responses.github} </b>
Contact Email: ${responses.email}
`;
}

module.exports = generateMarkdown;
