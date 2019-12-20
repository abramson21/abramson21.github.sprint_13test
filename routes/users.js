const router = require('express').Router();
const fs = require('fs');

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