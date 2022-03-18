const add = require('./add.js');
const subtract = require('./subtract.js');
const divide = require('./divide.js');
const multiply = require('./multiply.js');

const calculator = (num1, num2, operator) => {
  if (operator === 'plus') {
    add.addFunc(parseInt(num1), parseInt(num2));
  } else if (operator === 'minus') {
    subtract.subFunc(parseInt(num1), parseInt(num2));
  } else if (operator === 'over') {
    divide.divideFunc(parseInt(num1), parseInt(num2));
  } else if (operator === 'times') {
    multiply.multiplyFunc(parseInt(num1), parseInt(num2));
  }

};

calculator(process.argv[2], process.argv[4], process.argv[3]);
