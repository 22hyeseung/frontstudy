module.exports = (app, fs, dbPath) => {
  app.get('/users/:userid', (req, res) => {
    const result = {};
    const userid = req.params.userid;

    if (!req.body.userid) {
      result.success = 'false';
      result.error = '유효하지 않은 요청입니다.';
    }

    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) throw err;

      const { users } = JSON.parse(data);
      const userInfo = users.find(el => el.userid === userid);

      if (userInfo) {
        result.seccess = 'true';
        res.json(userInfo);
      } else {
        result.success = 'false';
        result.error = '존재하지 않는 아이디 입니다.';
        res.json(result);
      }
    });
  });
};
