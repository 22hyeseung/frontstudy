module.exports = (app, fs, dbPath) => {
  app.put('/books/:id', (req, res) => {
    const result = {};
    const id = req.params.id * 1;

    // Check id & request body
    if (!id || !req.body) {
      result.success = false;
      result.message = 'invalid request';
      res.json(result);
      return;
    }

    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) throw err;

      const json = JSON.parse(data);

      // 갱신 대상 없음
      if (!json.books.some(book => book.id === id)) {
        result.success = false;
        result.message = '갱신 대상 없음';
        res.json(result);
        return;
      }

      // Update data
      json.books = json.books.map(book => {
        if (book.id === id) book = req.body;
        return book;
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
