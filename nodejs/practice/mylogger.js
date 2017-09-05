// 미들웨어 함수 로드 순서의 중요성
// 먼저 호출된 것이 먼저 실행된다.
const express = require('express');

const app = express();

const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(myLogger);

app.listen(3000);
