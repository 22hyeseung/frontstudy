module.exports = (app, fs, dbPath) => {
  app.post('/books', (req, res) => {
    const result = {};
    const { title } = req.body;

    // Check request body
    if (!title) {
      result.success = false;
      result.message = 'invalid request';
      res.json(result);
      return;
    }

    // Load users & Check duplication
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) throw err;

      const json = JSON.parse(data);

      // Add data
      json.books.push(req.body);

      // Create user
      fs.writeFile(dbPath, JSON.stringify(json, null, 2), 'utf8', (err) => {
        if (err) throw err;

        result.success = true;
        res.json(result);
      });
    });
  });
};
