module.exports = (app, fs, dbPath) => {
  app.get('/users', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      // 에러 체크
      if (err) throw err;

      const { users } = JSON.parse(data); // 데이터 배열이 들어온다.
      return res.json(users);
    });
  });
};
