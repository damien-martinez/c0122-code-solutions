const express = require('express');

const app = express();

const fs = require('fs');

const data = require('./data.json');

let dataModel = {
};

dataModel = data;

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in dataModel.notes) {
    notesArray.push(dataModel.notes[id]);
  }

  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (dataModel.notes[id]) {
    res.status(200).json(dataModel.notes[id]);
  } else if (!dataModel.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(201).json({
      error: 'content is a required field'
    });
  } else if (req.body.content) {
    const newContent = req.body;
    newContent.id = dataModel.nextId;
    dataModel.notes[dataModel.nextId] = newContent;
    dataModel.nextId++;
    fs.writeFile('data.json', JSON.stringify(dataModel, null, 2), 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        res.status(201).json(req.body);

      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (dataModel.notes[id]) {
    delete dataModel.notes[id];
    fs.writeFile('data.json', JSON.stringify(dataModel, null, 2), 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        res.sendStatus(204);

      }
    });
  } else if (!dataModel.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }

});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (!dataModel.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (dataModel.notes[id]) {
    const newContent = req.body;
    dataModel.notes[id].content = newContent;

    fs.writeFile('data.json', JSON.stringify(dataModel, null, 2), 'utf8', err => {
      if (err) {

        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        res.status(200).json(req.body);

      }
    });
  }

});

app.listen(3000, () => {

});
