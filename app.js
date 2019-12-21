const express = require('express');
const path = require('path');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');
const mongoose = require('mongoose');
const router = require('express').Router();
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const usercreate = require('./models/user.js');
app.post('/users', (req, res) => {

  const { name, about, avatar } = req.params;
  usercreate.create({ name, about, avatar });
  console.log({ name, about, avatar });

});




const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use('/', users);
app.use('/', cards);
app.listen(PORT, () => {});

app.get('/*', (req, res) => {
  res.statusCode = 404;
  res.statusMessage = 'Error';
  res.send({ message: 'Запрашиваемый ресурс не найден' });
});