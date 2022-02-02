/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (typeof (person.name) === 'string' && typeof (person.age) === 'number') {
    return false;
  } else {
    return true;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  }
  if (pH > 0 && pH < 7) {
    return 'acid';
  }

  if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';

  }
}

function introduceWarnerBro(name) {
  if (name === 'wakko' || name === 'yakko') {
    return "we're the warner brothers";
  }

  if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
