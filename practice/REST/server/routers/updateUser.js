module.exports = (app, fs, dbPath) => {
  // Update user
  app.put('/users/:userid', (req, res) => {
    const result = {};
    const { userid } = req.params;

    // Check userid & request body
    if (!userid || !req.body) {
      result.success = false;
      result.message = 'invalid request';
      res.json(result);
      return;
    }

    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) throw err;

      const json = JSON.parse(data);

      // 갱신 대상 없음
      if (!json.users.some(user => user.userid === userid)) {
        result.success = false;
        result.message = '갱신 대상 없음';
        res.json(result);
        return;
      }

      // Update data
      json.users = json.users.map((user) => {
        if (user.userid === userid) user = req.body;
        return user;
      });

      // Update JSON File
      fs.writeFile(dbPath, JSON.stringify(json, null, 2), 'utf8', (err) => {
        if (err) throw err;

        result.success = true;
        res.json(result);
      });
    });
  });
};
