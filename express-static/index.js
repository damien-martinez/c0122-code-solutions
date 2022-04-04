const express = require('express');

const app = express();

const path = require('path');

const newPath = path.join(__dirname, './public');

console.log('dir', __dirname);

console.log('new path \n', newPath);

console.log(express.static(newPath));

app.use(express.static(newPath));

app.listen(3000, () => {
  console.log('listening');
});
