const express = require('express');
const router = express.Router();

const messages = [
  {
    user: 'Armando',
    text: 'Hi there!',
    added: new Date(),
  },
  {
    user: 'Charles',
    text: 'Hello World!',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

// GET new-message page
router.get('/new', function (req, res) {
  res.render('form', { title: 'Mini Messageboard' });
});

// POST new-message and redirect to home page
router.post('/new', function (req, res) {
  const newMsg = req.body;
  messages.push({ user: newMsg.author, text: newMsg.msg, added: new Date() });
  res.redirect('/');
});

module.exports = router;
