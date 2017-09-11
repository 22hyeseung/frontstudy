const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const dbPath = path.join(__dirname, '../data/users.json');

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

// router
const getUsers = require('./routers/getUsers')(app, fs, dbPath);

const getUser = require('./routers/getUser')(app, fs, dbPath);

const addUser = require('./routers/addUser')(app, fs, dbPath);

const updateUser = require('./routers/updateUser')(app, fs, dbPath);

const deleteUser = require('./routers/deleteUsers')(app, fs, dbPath);

app.listen(3000, () => console.log('Example app listening on http://localhost:3000'));
