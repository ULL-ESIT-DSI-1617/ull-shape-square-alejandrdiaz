"use strict";

require('should');
var Square = require('../square.js');

describe("Rectangle", function() {
  it("must compute the square area correctly", function() {
    var forma = new Square({ width: 100 });
    var area = forma.getArea();
    /* There is a white space between consecutive columns */
    area.should.match(10000);
  })
});
