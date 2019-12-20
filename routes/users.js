const router = require('express').Router();
const fs = require('fs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

/*const cardsSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
  },
  link: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  liks: {
    type: Array,
    enam: Array.default(),
  },
  crearedAt: {
    type: Date,
    enam: Date.now(),
  }
});*/

module.exports = mongoose.model('user', userSchema);
//module.exports = mongoose.model('cards', cardsSchema);

router.get('/users', (req, res) => {
  fs.readFile('data/users.json', 'utf8', (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

router.get('/users/:id', (req, res) => {
  const idUser = req.params.id;
  fs.readFile('data/users.json', 'utf8', (error, data) => {
    const cityId = JSON.parse(data).find((us) => us._id === idUser);
    if (cityId) {
      res.send(cityId);
    } else if (!cityId) {
      res.statusCode = 404;
      res.statusMessage = 'Error';
      res.send({ error: 'Такого пользователя нет' });
    }
  });
});

module.exports = router;
