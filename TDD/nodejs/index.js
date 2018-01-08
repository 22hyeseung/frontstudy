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
  // limit이 설정되지 않은 경우 기본값 10 으로 할당한다.
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10); // '2' 문자열 -> 10진수 숫자 2
  if (Number.isNaN(limit)) {
    // parseInt 함수는 첫번째 파라미터 값이 정수가 아니면 NaN을 반환한다.
    return res.status(400).end();
  }
  res.json(users.slice(0, limit));
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).end();
  }
  const user = users.filter((user) => user.id === id)[0];
  if (!user) return res.status(404).end();
  res.json(user);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000');
});
module.exports = app;
