let Shape = require("@alejandrdiaz/ull-shape-alejandrdiaz");
class Square extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return Math.pow(this.width,2);
    }
}
Shape.Shapes.Square = Square;
module.exports = Square;
