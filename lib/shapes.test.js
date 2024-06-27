const Shapes = require('./shapes');

describe('Shapes', () => {
    describe('circleGenerator', () => {
        it('should generate a circle shape with color fill and optional text', () => {
            const shapes = new Shapes(100, 100, 50, '#00FF00', 'My Circle');
            const generatedSvg = shapes.circleGenerator();
            
            const expectedSvg = `<svg height="200" width="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="100" cy="100" r="50" fill="#00FF00"></circle><text x="100" y="100" font-family="Arial" font-size="20" text-anchor="middle" dominant-baseline="middle" fill="black">My Circle</text></svg>`;
            
            expect(generatedSvg).toEqual(expectedSvg);
        });
    });
});


