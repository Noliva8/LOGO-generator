const inquirer = require('inquirer');
const { isColorName, isHexadecimalValid } = require('./lib/more/validation');


// Inquirer questions
const questions = [
    {
        type: "input",
        name: "text",
        message: "What is your logo all about?",
        validate: (answer) => {
            if (answer.length > 3) {
                return "Please enter up to 3 characters.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "color",
        message: "Enter a color keyword or a hexadecimal number:",
        validate: (answer) => {
            if (!isColorName(answer) && !isHexadecimalValid(answer)) {
                return "Please enter a valid color keyword or hexadecimal number.";
            }
            return true;
        }
    },

    {
        type: "list",
        name: "shape",
        message: 'Please choose the shape of your logo',
        choices: ['circle' , 'triangle' , 'square' ]

    },

    {
        type: "input",
        name: 'color',
        message: 'Please enter a color keyword (OR a hexadecimal number) for the shape of your logo',
        validate: (answer) => {
            if (!isColorName(answer) && !isHexadecimalValid(answer)) {
                return "Please enter a valid color keyword or hexadecimal number.";
            }
            return true;
        }
    }
];

// Prompt user and handle answers

inquirer.prompt(questions)
    .then(answers => {
        console.log('Logo Text:', answers.text);
        console.log('Color entered:', answers.color);
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
