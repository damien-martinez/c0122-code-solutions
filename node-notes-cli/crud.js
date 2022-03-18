const fs = require('fs');

const data = require('./data.json');

const dataModel = {
  data: {}
};

dataModel.data = data;

const crud = () => {
  if (process.argv[2] === 'read') {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.log('error');
      } else {
        for (const prop in dataModel.data.notes) {
          console.log(`${prop}: ${dataModel.data.notes[prop]} \n`);
        }
      }
    }
    );
  } else if (process.argv[2] === 'create') {
    dataModel.data.notes[dataModel.data.nextId] = process.argv[3];
    dataModel.data.nextId++;
    fs.writeFile('data.json', JSON.stringify(dataModel.data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
      }

    });

  } else if (process.argv[2] === 'delete') {

    delete dataModel.data.notes[String(process.argv[3])];
    fs.writeFile('data.json', JSON.stringify(dataModel.data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
      }

    });

  } else if (process.argv[2] === 'update') {
    dataModel.data.notes[String(process.argv[3])] = process.argv[4];
    fs.writeFile('data.json', JSON.stringify(dataModel.data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
      }

    });
  }
};

crud();
