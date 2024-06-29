const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    it('should render correctly', () => {
        const circle = new Circle('red', 'black', 2, 'white', 'C', 80);
        const svgContent = circle.renderCircle();
        expect(svgContent).toContain('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
        expect(svgContent).toContain('<circle cx="150" cy="100" r="80" fill="red" stroke="black" stroke-width="2" />');
        expect(svgContent).toContain('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20px" font-weight="700" fill="white">C</text>');
    });
});

describe('Triangle', () => {
    it('should render correctly', () => {
        const triangle = new Triangle('blue', 'black', 2, 'yellow', 'T');
        const svgContent = triangle.renderTriangle();
        expect(svgContent).toContain('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
        expect(svgContent).toContain('<polygon points="150,20 50,180 250,180" fill="blue" stroke="black" stroke-width="2" />');
        expect(svgContent).toContain('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20px" font-weight="700" fill="yellow">T</text>');
    });
});

describe('Square', () => {
    it('should render correctly with centered text in a 300x200 SVG', () => {
        const square = new Square('orange', 'black', 2, 'black', 'asd', 150); // Adjust size as needed
        const svgContent = square.renderSquare();
        expect(svgContent).toContain('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
        expect(svgContent).toContain('<rect x="75" y="25" width="150" height="150" fill="orange" stroke="black" stroke-width="2" />'); // Adjust x, y, width, and height based on size
        expect(svgContent).toContain('<text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="20px" font-weight="700" fill="black">asd</text>');
    });
});
