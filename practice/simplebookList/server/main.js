// SET UP Dependency
const express = require('express');
const bodyParser = require('body-parser');
// const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const app = express();
const dbPath = path.join(__dirname, '/data/books.json');

// ======================================================================
// CONFIGURATION
// ejs
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// Static File Service
app.use(express.static('public'));
// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// ======================================================================
// ROUTES

// index
app.get('/', (req, res) => res.render('index'));

// GET books
const bookList = require('./routers/bookList')(app, fs, dbPath);

// CREATE book
const createBook = require('./routers/createBook')(app, fs, dbPath);

// Update book
const updateBook = require('./routers/updateBook')(app, fs, dbPath);

// DELETE book
const deleteBook = require('./routers/deleteBook')(app, fs, dbPath);

app.listen(3000, () => console.log('app listening on http://localhost:3000'));
