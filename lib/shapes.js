const svgBuilder = require('svg-builder');

// class Circle {
//     constructor(centerX, centerY, radius, fillColor, text = '') {
//         this.centerX = centerX;
//         this.centerY = centerY;
//         this.radius = radius;
//         this.fillColor = fillColor;
//         this.text = text; // Optional text property
//     }

//     circleGenerator() {
//         const svg = svgBuilder
//             .width(200)
//             .height(200)
//             .circle({
//                 cx: this.centerX,
//                 cy: this.centerY,
//                 r: this.radius,
//                 fill: this.fillColor
//             });

//         // Add text if provided
//         if (this.text) {
//             svg.text({
//                 x: this.centerX,
//                 y: this.centerY,
//                 'font-family': 'Arial',
//                 'font-size': 20,
//                 'text-anchor': 'middle',
//                 'dominant-baseline': 'middle',
//                 fill: 'black'
//             }, this.text);
//         }

//         return svg.render();
//     }
// }

class Shapes {
  constructor(fill, stroke, strokeWidth, textColor, text) {
    this.fill = fill;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;
    this.text = text;
    this.textColor = textColor;
  }

  setText(x, y) {
    return this.text
      ? `<text x="${x}" y="${y}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColor}">${this.text}</text>`
      : '';
  }
}

class Circle extends Shapes {
  constructor(fill, stroke, strokeWidth, textColor, text, radius) {
    super(fill, stroke, strokeWidth, textColor, text);
    this.radius = radius;
  }

  renderCircle() {
    return `
      <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="${this.radius}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText(250, 250)}
      </svg>`;
  }
}

class Triangle extends Shapes {
  constructor(fill, stroke, strokeWidth, textColor, text) {
    super(fill, stroke, strokeWidth, textColor, text);
  }

  renderTriangle() {
    return `
      <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,60 100,400 400,400" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText(250, 250)}
      </svg>`;
  }
}

class Square extends Shapes {
  constructor(fill, stroke, strokeWidth, textColor, text, width, height) {
    super(fill, stroke, strokeWidth, textColor, text);
    this.width = width;
    this.height = height;
  }

  renderSquare() {
    const xEl = this.width / 2;
    const yEl = this.height / 2;
    return `
      <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="${this.width}" height="${this.height}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText(xEl, yEl)}
      </svg>`;
  }
}

module.exports = { Shapes, Circle, Triangle, Square };















