const express = require('express');

const app = express();

let nextId = 1;

const grades = {};

const jsonMiddleware = express.json();
app.use(jsonMiddleware);
app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});
app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const id = nextId++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);
});
app.listen(3000, () => {
});
