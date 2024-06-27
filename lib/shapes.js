const svgBuilder = require('svg-builder');

class Circle {
    constructor(centerX, centerY, radius, fillColor, text = '') {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.fillColor = fillColor;
        this.text = text; // Optional text property
    }

    circleGenerator() {
        const svg = svgBuilder
            .width(200)
            .height(200)
            .circle({
                cx: this.centerX,
                cy: this.centerY,
                r: this.radius,
                fill: this.fillColor
            });

        // Add text if provided
        if (this.text) {
            svg.text({
                x: this.centerX,
                y: this.centerY,
                'font-family': 'Arial',
                'font-size': 20,
                'text-anchor': 'middle',
                'dominant-baseline': 'middle',
                fill: 'black'
            }, this.text);
        }

        return svg.render();
    }
}

module.exports = Circle;







// // triangle
// class Triangle{
//     constructor (){

//     }
// };

// Triangle.prototype.triangleGenerator = () => {

// };



// // square

// class Square{
//     constructor (){

//     }
// };

// Square.prototype.squareGenerator = () => {

// };




// module.exports = Circle;