const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.log('please input a correct txt file');
  } else {
    console.log(data);
  }
});
