const router = require('express').Router();
const express = require('express');
const fs = require('fs');
const User = require('../models/user');
const app = express();
const bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/users', (req, res) => {
  fs.readFile('data/users.json', 'utf8', (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});



router.post('/users', (req, res) => {
  const {name, about, avatar} = req.body;
  console.log(name);
  console.log({name, about, avatar});

  console.log(req.body);

  User.create({name, about, avatar})
    .then(user => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
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