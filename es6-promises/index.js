const takeAChance = require('./take-a-chance');

const chance = takeAChance('damo');

chance.then(value => {
  console.log(value);
});
chance.catch(error => {
  console.log(error.message);
});
