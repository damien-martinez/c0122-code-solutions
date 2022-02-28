/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && typeof amount !== 'string' && isNaN(amount) !== true && amount % 1 === 0) {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && typeof amount !== 'string' && isNaN(amount) !== true && amount % 1 === 0) {
    var newTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var totalAmount = 0;
  var newType = '';
  var newAmount = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    newType = this.transactions[i].type;
    newAmount = this.transactions[i].amount;

    if (newType === 'withdrawal') {
      totalAmount -= newAmount;
    } else {
      totalAmount += newAmount;
    }

  }
  return totalAmount;
};
