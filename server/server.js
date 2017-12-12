const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'Juli',
    age: '12'
  }, {
    name: 'John',
    age: '12'
  }, {
    name: 'Ike',
    age: '120'
  }]);
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});

module.exports.app = app;