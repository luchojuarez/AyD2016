// var Calculator = require('../calculator.js');

var expect = require ("chai").expect;
var moduleCalculator = require("../calculator.js");
var Calculator = moduleCalculator.calculator;

describe("calculator", function() {
    it("should have a num method", function() {
        var c = new Calculator;
        expect(c.sum).to.be.a("function");
    })
})
