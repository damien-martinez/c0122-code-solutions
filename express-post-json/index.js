const express = require('express');

const app = express();

// const nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {
  // console.log('G E T');
  res.json(grades);
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.json());

// const testGrades = {
//   name: 'Brendan Eich',
//   course: 'JavaScript',
//   score: 100
// };

app.post('/api/grades', (req, res) => {
  // console.log('P O S T');
  app.use(express.json(req.body));
  res.send(req.body);
  res.status(201);

});

app.listen(3000, () => {
  // console.log('listening');

});
