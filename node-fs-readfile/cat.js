let string = '';

const fs = require('fs');

for (let i = 2; i < process.argv.length; i++) {
  const data = fs.readFileSync(process.argv[i], { encoding: 'utf8', flag: 'r' });
  string += data;
  string += '\n';

}

console.log(string);
