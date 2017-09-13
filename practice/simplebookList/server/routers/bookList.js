module.exports = (app, fs, dbPath) => {
  // GET books
  app.get('/books', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) throw err;

      const { books } = JSON.parse(data);
      res.json(books);
    });
  });
};

