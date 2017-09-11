module.exports = (app, fs, dbPath) => {
  // DELETE User
  app.delete('/users/:userid', (req, res) => {
    const result = {};
    const { userid } = req.params;

    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) throw err;

      const json = JSON.parse(data);

      // 삭제 대상 없음
      if (!json.users.some(user => user.userid === userid)) {
        result.success = false;
        result.message = '삭제 대상 없음';
        res.json(result);
        return;
      }

      // DELETE data
      json.users = json.users.filter(user => user.userid !== userid);

      // DELETE JSON File
      fs.writeFile(dbPath, JSON.stringify(json, null, 2), 'utf8', (err) => {
        result.success = true;
        res.json(result);
      });
    });
  });
};
