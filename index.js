const fs = require('fs');
const inquirer = require('inquirer');
const { document } = require('svg.js');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):',
        },
    ])
    .then(answers => {
        // Create an SVG document
        const svg = document.createDocument().size(300, 200);

        // Add your text and shape elements to the SVG
        // You will need to use the answers to set the properties of these elements.

        // Save the SVG to a file named 'logo.svg'
        const svgString = svg.svg();
        fs.writeFileSync('logo.svg', svgString);

        console.log('Generated logo.svg');
    })
    .catch(error => {
        console.error(error);
    });





/*

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions)
    .then(answers =>{
    fs.writeFileSync("./dist/README.md", `
# ${answers.title}

## Description

${answers.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}


## License

${answers.license}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)



## How to Contribute

${answers.contribution}

## Tests
${answers.test}


## Questions

${answers.email}
https://github.com/${answers.github}

    `)  
    })
}

// Function call to initialize app
init();

*/