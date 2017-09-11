module.exports = (app, fs, dbPath) => {
  // create users
  app.post('/users', (req, res) => {
    const result = {};
    const { userid, password } = req.body;

    // Check request body
    if (!userid || !password) {
      result.success = false;
      result.message = 'invalid request';
      res.json(result);
      return;
    }

    // Load users & Check duplication
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) throw err;

      const json = JSON.parse(data);
      const [user] = json.users.filter(user => user.userid === userid);

      // 사용자 아이디 중복
      if (user) {
        result.success = false;
        result.message = '사용자 아이디 중복';
        res.json(result);
        return;
      }

      // Add data
      json.users.push(req.body);

      fs.writeFile(dbPath, JSON.stringify(json, null, '\t'), 'utf8', (err) => {
        if (err) throw err;

        result.success = true;
        res.json(result);
      });
      // Create user
    });
  });
};
