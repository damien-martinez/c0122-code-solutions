const fs = require('fs');

const data = String(Math.random());

fs.writeFile('random.txt', data, 'utf8', err => {
  if (err) throw err;
}
);
