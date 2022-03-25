const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumberFunc = num => {
  return (num % 2) === 0;

};

const evenNumbers = numbers.filter(evenNumberFunc);

const overFiveFunc = num => {
  return num > 5;
};

const overFive = numbers.filter(overFiveFunc);

const startsWithEFunc = word => {
  return word[0] === 'E';
};

const startsWithE = names.filter(startsWithEFunc);

const haveDFunc = word => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'd' || word[i] === 'D') {
      return true;
    }
  }
};

const havdD = names.filter(haveDFunc);
