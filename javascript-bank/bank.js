/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && typeof balance !== 'string' && isNaN(balance) !== true && balance % 1 === 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }

};

Bank.prototype.getAccount = function (number) {
  if (number > 0 && typeof balance !== 'string' && isNaN(number) !== true && number % 1 === 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (number === this.accounts[i].number) {
        return this.accounts[i];
      }

    }
  }

  return null;

};

Bank.prototype.getTotalAssets = function () {
  var entireAmount = 0;
  if (this.accounts.length < 1) {
    return 0;
  }
  for (var i = 0; i < this.accounts.length; i++) {
    for (var j = 0; j < this.accounts[i].transactions.length; j++) {
      if (this.accounts[i].transactions[j].type === 'deposit') {
        entireAmount += this.accounts[i].transactions[j].amount;

      } else {
        entireAmount -= this.accounts[i].transactions[j].amount;
      }
    }

  }
  return entireAmount;
};
