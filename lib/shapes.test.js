const { Shapes, Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  it('should create a Shapes instance with correct properties', () => {
    const shape = new Shapes('red', 'black', 2, 'white', 'Test');
    expect(shape.fill).toBe('red');
    expect(shape.stroke).toBe('black');
    expect(shape.strokeWidth).toBe(2);
    expect(shape.textColor).toBe('white');
    expect(shape.text).toBe('Test');
  });

  it('should render text correctly', () => {
    const shape = new Shapes('red', 'black', 2, 'white', 'Test');
    const text = shape.setText(250, 250);
    expect(text).toBe('<text x="250" y="250" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="white">Test</text>');
  });

  it('should not render text if text property is empty', () => {
    const shape = new Shapes('red', 'black', 2, 'white', '');
    const text = shape.setText(250, 250);
    expect(text).toBe('');
  });
});

describe('Circle', () => {
  it('should create a Circle instance with correct properties', () => {
    const circle = new Circle('red', 'black', 2, 'white', 'Test', 100);
    expect(circle.fill).toBe('red');
    expect(circle.stroke).toBe('black');
    expect(circle.strokeWidth).toBe(2);
    expect(circle.textColor).toBe('white');
    expect(circle.text).toBe('Test');
    expect(circle.radius).toBe(100);
  });

  it('should render a circle with text', () => {
    const circle = new Circle('red', 'black', 2, 'white', 'Test', 100);
    const svg = circle.renderCircle();
    expect(svg).toContain('<circle cx="250" cy="250" r="100" fill="red" stroke="black" stroke-width="2" />');
    expect(svg).toContain('<text x="250" y="250" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="white">Test</text>');
  });
});

describe('Triangle', () => {
  it('should create a Triangle instance with correct properties', () => {
    const triangle = new Triangle('blue', 'black', 2, 'white', 'Test');
    expect(triangle.fill).toBe('blue');
    expect(triangle.stroke).toBe('black');
    expect(triangle.strokeWidth).toBe(2);
    expect(triangle.textColor).toBe('white');
    expect(triangle.text).toBe('Test');
  });

  it('should render a triangle with text', () => {
    const triangle = new Triangle('blue', 'black', 2, 'white', 'Test');
    const svg = triangle.renderTriangle();
    expect(svg).toContain('<polygon points="250,60 100,400 400,400" fill="blue" stroke="black" stroke-width="2" />');
    expect(svg).toContain('<text x="250" y="250" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="white">Test</text>');
  });
});

describe('Square', () => {
  it('should create a Square instance with correct properties', () => {
    const square = new Square('green', 'black', 2, 'white', 'Test', 400, 400);
    expect(square.fill).toBe('green');
    expect(square.stroke).toBe('black');
    expect(square.strokeWidth).toBe(2);
    expect(square.textColor).toBe('white');
    expect(square.text).toBe('Test');
    expect(square.width).toBe(400);
    expect(square.height).toBe(400);
  });

  it('should render a square with text', () => {
    const square = new Square('green', 'black', 2, 'white', 'Test', 400, 400);
    const svg = square.renderSquare();
    expect(svg).toContain('<rect width="400" height="400" fill="green" stroke="black" stroke-width="2" />');
    expect(svg).toContain('<text x="200" y="200" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="white">Test</text>');
  });
});
