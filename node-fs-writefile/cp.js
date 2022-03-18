const fs = require('fs');

const readData = process.argv[2];
const writeData = process.argv[3];

fs.readFile(String(readData), 'utf8', (err, data) => {
  if (err) {
    process.exit(1);
  } else {
    fs.writeFile(String(writeData), data, 'utf8', err => {
      if (err) throw err;
    });
  }
});
