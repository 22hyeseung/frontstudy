const express = require('express');
const app = express();
const morgan = require('morgan');
const users = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];

app.use(morgan('dev'));

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000');
});

module.exports = app;
