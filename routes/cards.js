const router = require('express').Router();
const fs = require('fs');

router.get('/cards', (req, res) => {
  fs.readFile('data/cards.json', 'utf8', (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

module.exports = router;
