module.exports = (app, fs, dbPath) => {
  app.delete('/books/:id', (req, res) => {
    const result = {};
    const id = req.params.id * 1;

    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) throw err;

      const json = JSON.parse(data);

      // 삭제 대상 없음
      if (!json.books.some(book => book.id === id)) {
        result.success = false;
        result.message = '삭제 대상 없음';
        res.json(result);
        return;
      }

      // DELETE data
      json.books = json.books.filter(book => book.id !== id);

      // DELETE JSON File
      fs.writeFile(dbPath, JSON.stringify(json, null, 2), 'utf8', (err) => {
        result.success = true;
        res.json(result);
      });
    });
  });
};
