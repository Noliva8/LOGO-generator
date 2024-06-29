class Shapes {
  constructor(fill, stroke, strokeWidth, textColor, text) {
    this.fill = fill;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;
    this.text = text;
    this.textColor = textColor;
  }

  setText() {
    return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20px" font-weight="700" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Circle extends Shapes {
  constructor(fill, stroke, strokeWidth, textColor, text, radius) {
    super(fill, stroke, strokeWidth, textColor, text);
    this.radius = radius;
  }

  renderCircle() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText()}
      </svg>
    `;
  }
}

class Triangle extends Shapes {
  renderTriangle() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 50,180 250,180" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText()}
      </svg>
    `;
  }
}

class Square extends Shapes {
    constructor(fill, stroke, strokeWidth, textColor, text, size) {
        super(fill, stroke, strokeWidth, textColor, text);
        this.size = size;
    }

    renderSquare() {
        const svgWidth = 300;
        const svgHeight = 200;
        const rectSize = this.size; // Adjust size as needed

        const xRect = (svgWidth - rectSize) / 2;
        const yRect = (svgHeight - rectSize) / 2;

        const xText = svgWidth / 2;
        const yText = svgHeight / 2;

        return `
            <svg version="1.1" width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
                <rect x="${xRect}" y="${yRect}" width="${rectSize}" height="${rectSize}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
                <text x="${xText}" y="${yText}" dominant-baseline="middle" text-anchor="middle" font-size="20px" font-weight="700" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}


module.exports = { Shapes, Circle, Triangle, Square };
