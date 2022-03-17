const fs = require('fs');

let data = '';

for (let i = 2; i < process.argv.length; i++) {
  data += process.argv[i] + ' ';
}

fs.writeFile('note.txt', data, 'utf8', err => {
  if (err) {
    console.error(err);
  }

});
