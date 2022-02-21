/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },

  multiply: function (x, y) {
    return x * y;
  },

  divide: function (x, y) {
    return x / y;
  },

  square: function (x) {
    return x ** 2;
  },

  sumAll: function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },

  getAverage: function (numbers) {
    var sum = 0;
    var len = numbers.length;
    for (var i = 0; i < len; i++) {
      sum += numbers[i];
    }
    return sum / len;
  }

};
