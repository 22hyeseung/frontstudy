const express = require('express');
const app = express();
const morgan = require('morgan');
const users = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
];

app.use(morgan('dev'));

app.get('/users', (req, res) => {
  const limit = req.query.limit;
  res.json(users.slice(0, limit));
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000');
});

module.exports = app;
