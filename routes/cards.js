const router = require('express').Router();
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

router.get('/cards', (req, res) => {
  fs.readFile('data/cards.json', 'utf8', (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

module.exports = router;