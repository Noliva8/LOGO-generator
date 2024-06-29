const inquirer = require('inquirer');
const fs = require('fs');
const { isColorName, isHexadecimalValid } = require('./lib/more/validation');
const { Shapes, Circle, Triangle, Square } = require('./lib/shapes');

// Inquirer questions
const questions = [
    {
        type: "input",
        name: "text",
        message: "What text would you like on your logo? (Max 3 characters)",
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
        message: "Please provide a text color (color name or hex code):",
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
        message: 'Select the shape of your logo:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: "input",
        name: 'shapeColor',
        message: 'Please provide a shape color (color name or hex code):',
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
        let svgContent;

        if (answers.shape === 'circle') {
            const circle = new Circle(answers.shapeColor, 'black', 2, answers.color, answers.text, 80);
            svgContent = circle.renderCircle();
        } else if (answers.shape === 'square') {
            const square = new Square(answers.shapeColor, 'black', 2, answers.color, answers.text, 100, 100);
            svgContent = square.renderSquare();
        } else if (answers.shape === 'triangle') {
            const triangle = new Triangle(answers.shapeColor, 'black', 2, answers.color, answers.text);
            svgContent = triangle.renderTriangle();
        }

        fs.writeFile('./examples/logo.svg', svgContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Your logo.svg has been created. Please check the examples folder.');
            }
        });
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
