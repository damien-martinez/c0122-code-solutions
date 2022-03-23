const express = require('express');

const app = express();

const fs = require('fs');

const data = require('./data.json');

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in data.notes) {
    notesArray.push(data.notes[id]);
  }

  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (data.notes[id]) {
    res.status(200).json(data.notes[id]);
  } else if (!data.notes[id]) {
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
    newContent.id = data.nextId;
    data.notes[data.nextId] = newContent;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
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
  } else if (data.notes[id]) {
    delete data.notes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        res.sendStatus(204);

      }
    });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }

});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (data.notes[id]) {
    const newContent = req.body;
    data.notes[id] = newContent;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
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
